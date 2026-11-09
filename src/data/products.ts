export type Category = {
  id: string
  name: string
  image: string
  blurb: string
}

export type Occasion = {
  id: string
  name: string
  image: string
}

export type Product = {
  id: string
  slug: string
  name: string
  price: number
  compareAt?: number
  image: string
  images?: string[]
  category: string
  occasion?: string
  badge?: 'New' | 'Sale' | 'Out of stock'
  description: string
  inStock: boolean
  variants?: string[]
}

export const categories: Category[] = [
  {
    id: 'bubble-balloons',
    name: '24" Custom Bubble Balloons',
    image:
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80',
    blurb: 'Personalised messages stuffed with confetti',
  },
  {
    id: 'helium-bouquets',
    name: 'Helium Balloon Bouquets',
    image:
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=800&q=80',
    blurb: 'Ready-to-gift foil & latex combos',
  },
  {
    id: 'giant-balloons',
    name: '36" Giant Balloons',
    image:
      'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80',
    blurb: 'Statement orbs for photo moments',
  },
  {
    id: 'name-bottles',
    name: 'Custom Name Bottles',
    image:
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80',
    blurb: 'Insulated bottles with your name',
  },
  {
    id: 'name-mugs',
    name: 'Custom Name Mugs',
    image:
      'https://images.unsplash.com/photo-1514228742587-6b1558fcc36f?auto=format&fit=crop&w=800&q=80',
    blurb: 'Everyday keepsakes, party-ready',
  },
  {
    id: 'cake-toppers',
    name: 'Custom Cake Toppers',
    image:
      'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=800&q=80',
    blurb: 'Acrylic names & occasion motifs',
  },
  {
    id: 'backdrop-signage',
    name: 'Backdrop Name Signage',
    image:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
    blurb: 'Letters that steal the room',
  },
  {
    id: 'plush-gifts',
    name: 'Plush Gift Balloons',
    image:
      'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=800&q=80',
    blurb: 'Soft toys + balloon bundles',
  },
  {
    id: 'party-decors',
    name: 'Party Decors',
    image:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
    blurb: 'Garlands, banners & table styling',
  },
  {
    id: 'party-supplies',
    name: 'Party Supplies',
    image:
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&q=80',
    blurb: 'Everything else for the bash',
  },
]

export const occasions: Occasion[] = [
  {
    id: 'birthday',
    name: 'Birthday',
    image:
      'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'baby-shower',
    name: 'Baby Shower',
    image:
      'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'wedding',
    name: 'Wedding',
    image:
      'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'christmas',
    name: 'Christmas',
    image:
      'https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'graduation',
    name: 'Graduation',
    image:
      'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=900&q=80',
  },
  {
    id: 'gender-reveal',
    name: 'Gender Reveal',
    image:
      'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=900&q=80',
  },
]

export const products: Product[] = [
  {
    id: '1',
    slug: 'designer-bubble-balloon-custom-message',
    name: 'Designer Helium Balloon with Custom Message — 24" Bubble Balloon stuffed with confetti mini balloons',
    price: 59.9,
    compareAt: 65,
    image:
      'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=900&q=80',
    category: 'bubble-balloons',
    occasion: 'birthday',
    badge: 'Sale',
    inStock: true,
    description:
      'Our signature 24-inch bubble balloon, personalised with your message and filled with confetti mini balloons. Helium inflated and ready for delivery across Singapore.',
  },
  {
    id: '2',
    slug: 'pearl-metallic-helium-latex-12inch',
    name: 'Individual Helium Inflated Balloons — Pearl / Metallic 12" latex balloons',
    price: 1.8,
    image:
      'https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=900&q=80',
    category: 'helium-bouquets',
    badge: 'New',
    inStock: true,
    variants: ['Pearl White', 'Chrome Gold', 'Chrome Rose', 'Chrome Silver'],
    description:
      'Premium pearl and metallic latex balloons, helium inflated. Mix and match colours for bouquets or balloon walls.',
  },
  {
    id: '3',
    slug: 'bubble-bouquet-alphabet-boxes',
    name: '24" Helium Bubble Balloon + 7pcs Side Balloons Bouquet + Alphabet Balloon Boxes',
    price: 94.6,
    image:
      'https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=900&q=80',
    category: 'helium-bouquets',
    occasion: 'baby-shower',
    badge: 'New',
    inStock: true,
    description:
      'A show-stopping set: personalised bubble balloon, coordinating side balloons, and alphabet letter boxes for photo-ready styling.',
  },
  {
    id: '4',
    slug: 'hot-air-balloon-baby-hamper-blue',
    name: 'Personalised Hot Air Balloon Hamper — Dream High Baby Gift Set (Blue)',
    price: 229,
    image:
      'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=900&q=80',
    category: 'plush-gifts',
    occasion: 'baby-shower',
    inStock: true,
    description:
      'Luxe newborn welcome crate with a personalised hot air balloon motif, plush companion, and keepsake wrapping.',
  },
  {
    id: '5',
    slug: 'newborn-welcome-crate-pink',
    name: 'Personalised Luxe Newborn Welcome Crate with Balloon Garland — Pink Theme',
    price: 229,
    image:
      'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=900&q=80',
    category: 'plush-gifts',
    occasion: 'baby-shower',
    inStock: true,
    description:
      'Soft pink theme welcome crate with mini balloon garland accents — ideal for hospital visits and baby showers.',
  },
  {
    id: '6',
    slug: 'unicorn-foil-bouquet',
    name: 'Helium Balloons Bouquet — Hippie Unicorn Foil + 4 Latex Fashion Balloons',
    price: 34.9,
    image:
      'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?auto=format&fit=crop&w=900&q=80',
    category: 'helium-bouquets',
    occasion: 'birthday',
    inStock: true,
    description:
      'Magical unicorn foil centrepiece paired with fashion latex balloons. Perfect for kids’ parties and fantasy themes.',
  },
  {
    id: '7',
    slug: 'rainbow-foil-balloon-24',
    name: 'Rainbow Foil Balloon 24"',
    price: 22.9,
    image:
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=900&q=80',
    category: 'giant-balloons',
    occasion: 'birthday',
    badge: 'New',
    inStock: true,
    description:
      'Bright rainbow foil balloon that floats with helium — a cheerful add-on for any celebration.',
  },
  {
    id: '8',
    slug: 'happy-birthday-star-foil',
    name: 'Happy Birthday Star Shaped Foil Balloon 37.8"',
    price: 22.9,
    image:
      'https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=900&q=80',
    category: 'giant-balloons',
    occasion: 'birthday',
    inStock: true,
    description:
      'Oversized star foil balloon with Happy Birthday lettering — instant centrepiece energy.',
  },
  {
    id: '9',
    slug: 'christmas-snowman-bouquet',
    name: 'Snowman & Blue Swirl Christmas Helium Balloon Bouquet — 5 Foil Balloons',
    price: 29.9,
    image:
      'https://images.unsplash.com/photo-1512389142860-9c449e58a543?auto=format&fit=crop&w=900&q=80',
    category: 'helium-bouquets',
    occasion: 'christmas',
    badge: 'Out of stock',
    inStock: false,
    description:
      'Festive five-piece foil bouquet with snowman and cool blue swirls for holiday table styling.',
  },
  {
    id: '10',
    slug: 'christmas-santa-peppermint-bouquet',
    name: 'Santa & Peppermint Christmas Helium Balloon Bouquet — 5 Foil Balloons',
    price: 29.9,
    image:
      'https://images.unsplash.com/photo-1482517967863-00e15c9b44be?auto=format&fit=crop&w=900&q=80',
    category: 'helium-bouquets',
    occasion: 'christmas',
    badge: 'Out of stock',
    inStock: false,
    description:
      'Classic Santa and peppermint foil set — cheerful for doorways, desks, and gift reveals.',
  },
  {
    id: '11',
    slug: 'personalised-reindeer-bouquet',
    name: 'Personalised Reindeer Christmas Balloon Bouquet (6 pcs set)',
    price: 50.2,
    image:
      'https://images.unsplash.com/photo-1543589077-50212b9639f5?auto=format&fit=crop&w=900&q=80',
    category: 'helium-bouquets',
    occasion: 'christmas',
    badge: 'New',
    inStock: true,
    description:
      'Six-piece reindeer-led bouquet with optional name personalisation for festive gifting.',
  },
  {
    id: '12',
    slug: 'rose-gold-alphabet-foil-40inch',
    name: '40" Alphabet Foil Balloon — Rose Gold Giant Mylar Letter',
    price: 7.9,
    image:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=80',
    category: 'backdrop-signage',
    badge: 'New',
    inStock: true,
    variants: [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ0'],
    description:
      'Giant rose gold letter balloons to spell names, ages, or short messages. Sold individually.',
  },
  {
    id: '13',
    slug: 'gold-glitter-banner-custom',
    name: 'Custom Gold Glitter Banner',
    price: 1.2,
    image:
      'https://images.unsplash.com/photo-1527529482832-303ae5a2ea89?auto=format&fit=crop&w=900&q=80',
    category: 'party-decors',
    inStock: true,
    description:
      'Spell any phrase with shimmering gold glitter letters. Lightweight and party-proof.',
  },
  {
    id: '14',
    slug: 'christmas-elf-snow-globe-display',
    name: 'Christmas Elf Snow Globe Balloon Display with Red Foil Star',
    price: 74.9,
    image:
      'https://images.unsplash.com/photo-1576919228236-a097c32a5cd4?auto=format&fit=crop&w=900&q=80',
    category: 'party-decors',
    occasion: 'christmas',
    badge: 'New',
    inStock: true,
    description:
      'Whimsical elf snow-globe style balloon display topped with a red foil star — lobby ready.',
  },
  {
    id: '15',
    slug: 'matte-fashion-helium-latex',
    name: 'Individual Helium Inflated Balloons — Fashion / Matte 12" latex',
    price: 1.8,
    compareAt: 2,
    image:
      'https://images.unsplash.com/photo-1527529482832-303ae5a2ea89?auto=format&fit=crop&w=900&q=80',
    category: 'helium-bouquets',
    inStock: true,
    variants: ['Dusty Rose', 'Sage', 'Navy', 'Butter', 'Champagne'],
    description:
      'On-trend matte fashion colours for modern party styling. Helium inflated per balloon.',
  },
  {
    id: '16',
    slug: 'weekly-planner-refill-pad',
    name: 'A4 Weekly Planner Refill Pad with Tearable Pages',
    price: 8.9,
    image:
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=900&q=80',
    category: 'party-supplies',
    inStock: true,
    description:
      'Clean A4 weekly planner refill — tearable pages for party planning and everyday lists.',
  },
]

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Balloons', to: '/shop?category=helium-bouquets' },
  { label: 'Occasions', to: '/shop' },
  { label: 'Party Supplies', to: '/shop?category=party-supplies' },
  { label: 'Custom Gifts', to: '/shop?category=name-bottles' },
  { label: 'Wedding', to: '/shop?occasion=wedding' },
  { label: 'Lifestyle', to: '/shop?category=party-supplies' },
]

export function formatPrice(value: number) {
  return `$${value.toFixed(2)}`
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug)
}

export function filterProducts(opts: {
  category?: string | null
  occasion?: string | null
  q?: string | null
}) {
  const q = opts.q?.trim().toLowerCase()
  return products.filter((p) => {
    if (opts.category && p.category !== opts.category) return false
    if (opts.occasion && p.occasion !== opts.occasion) return false
    if (q && !p.name.toLowerCase().includes(q)) return false
    return true
  })
}
