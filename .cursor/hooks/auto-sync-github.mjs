import { execSync } from 'node:child_process'
import { readFileSync } from 'node:fs'

try {
  readFileSync(0, 'utf8')
} catch {
  // stdin may be empty
}

function run(command) {
  return execSync(command, {
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'pipe'],
  }).trim()
}

try {
  const status = run('git status --porcelain')
  if (!status) {
    process.stdout.write('{}\n')
    process.exit(0)
  }

  run('git add -A')

  const stamp = new Date().toISOString().replace('T', ' ').slice(0, 19)
  const message = `Auto-sync: ${stamp}`

  try {
    execSync(
      `git -c user.name="venkatb5699-beep" -c user.email="venkatb5699-beep@users.noreply.github.com" commit -m ${JSON.stringify(message)}`,
      { stdio: ['ignore', 'pipe', 'pipe'], encoding: 'utf8' },
    )
  } catch (error) {
    const output = `${error.stdout ?? ''}${error.stderr ?? ''}`
    if (!/nothing to commit/i.test(output)) throw error
  }

  run('git push origin HEAD')
} catch (error) {
  const detail = error.stderr || error.stdout || error.message || String(error)
  process.stderr.write(`auto-sync-github failed: ${detail}\n`)
}

process.stdout.write('{}\n')
process.exit(0)
