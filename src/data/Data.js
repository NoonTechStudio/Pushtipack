// Import all product images
import img1 from "../assets/Images/Mono.jpg";
import img2 from "../assets/Images/img1.jpg";
import img3 from "../assets/Images/img2.jpg";
import img4 from "../assets/Images/img3.jpg";
import img5 from "../assets/Images/Labels.jpg";
import img6 from "../assets/Images/pl2.jpg";
import img7 from "../assets/Images/label1.png";
import img8 from "../assets/Images/label2.png";
import img9 from "../assets/Images/Leaf1.webp";
import img10 from "../assets/Images/Leaf2.webp";
import img11 from "../assets/Images/Leaf3.jpg";
import img12 from "../assets/Images/img12.jpg";
// promotional products
import img17 from "../assets/Images/Leaflet-1.jpg";
import img18 from "../assets/Images/l2.jpg";
import img19 from "../assets/Images/l3.webp";
import img20 from "../assets/Images/Leaflet.jpg";
import img21 from "../assets/Images/corru1.webp";
import img22 from "../assets/Images/corru2.jpg";
import img23 from "../assets/Images/corru3.png";
import img24 from "../assets/Images/corrugatedBox.jpg";

// Product data with comprehensive information, updated to match Header.jsx links
export const productData = {
  "mono-cartons": {
    id: "mono-cartons",
    name: "Mono Cartons (Folding Cartons)",
    description:
      "High-precision, single-piece folding cartons ideal for pharmaceutical, cosmetics, and food packaging. Our cartons feature intricate die-cutting and high-end finishes like metallic foiling and UV spot coating for premium shelf appeal. We specialize in multiple carton types including Drip Off Cartons (selective matte-gloss effects), Metpet Cartons (metallic lamination), Cold Foil Cartons (brilliant metallic accents), Embossed Cartons (dimensional patterns), and Extra Flap Cartons (enhanced security features).",
    images: [img1, img2, img3, img4],
    imageLabels: ["Metpet Mono Carton", "Drip Off Mono Carton", "Cold Foil Mono Carton", "Embossed Mono Carton"],
    features: [
      "FDA Compliant Stock",
      "Drip Off, Metpet & Cold Foil Finishing",
      "Precision Embossing & Debossing",
      "Extra Flap Security Options",
      "Customizable Structures (lock-bottom, tuck-end)",
      "Premium Metallic & UV Spot Coating",
      "High-Speed Automated Production",
    ],
    applications: [
      "Pharmaceutical Blister Packs",
      "Luxury Cosmetic Products",
      "Premium Electronics Packaging",
      "Gourmet Food & Confectionery",
      "Healthcare & Wellness Products",
    ],
    category: "packaging",
    specifications: [
      "Material: Virgin paperboard 250-450 GSM",
      "Printing: Up to 7 colors offset printing",
      "Finishing: Drip Off, Metpet, Cold Foil, Embossing, Spot UV",
      "Closure: Tuck-end, auto-bottom, reverse tuck, extra flap",
      "Carton Types: Drip Off, Metpet, Cold Foil, Embossed, Extra Flap",
    ],
    benefits: [
      "Exceptional structural integrity and product protection",
      "Multiple premium finishing options for unique brand differentiation",
      "Suitable for tamper-evident and security requirements",
      "Maximizes shelf presence with luxurious tactile and visual effects",
      "Designed for efficient filling and sealing on automated production lines",
      "Compliant with stringent pharmaceutical and food safety standards",
    ],
  },
  labels: {
    id: "labels",
    name: "Labels (Self-Adhesive & Roll Form)",
    description:
      "Durable, high-quality self-adhesive labels available in roll or sheet form. We offer a variety of paper and filmic substrates with strong, weather-resistant adhesives, perfect for product branding and regulatory compliance. Our label range includes Sticker Labels (roll form with strong adhesives for automated application), Paper Labels (eco-friendly chromo and specialty papers), and Sheet Form Paper Labels (ideal for manual application and small batch production).",
    images: [img5, img6, img7, img8],
    imageLabels: ["Sticker Label", "Paper Label", "Sheet Form Label", "Roll Form Label"],
    features: [
      "Water & Oil Resistant Materials",
      "Sticker Labels (Roll Form)",
      "Premium Paper Labels",
      "Sheet Form Paper Labels",
      "Flexographic and Digital Printing",
      "Variable Data & Barcode Integration",
      "Custom Die-Cut Shapes & Sizes",
      "Eco-Friendly Sustainable Options",
    ],
    applications: [
      "Bottle & Jar Labeling (Beverages, Cosmetics)",
      "Industrial Drum & Container Labels",
      "Logistics & Shipping Labels",
      "Product Authentication & Security Seals",
      "Artisanal & Craft Product Labels",
      "Retail Price & Information Labels",
    ],
    category: "labels",
    specifications: [
      "Material: Chromo paper, PVC, PP, or specialty film",
      "Adhesive: Permanent, deep-freeze, removable, or peelable",
      "Printing: Up to 8 colors Flexo and Digital",
      "Finishing: Matte/Gloss varnish, lamination, or spot UV",
      "Format: Roll form (sticker labels) or sheet form (paper labels)",
    ],
    benefits: [
      "Ensure regulatory compliance with crisp, legible text and barcodes",
      "Maintain brand integrity through harsh environmental conditions",
      "Versatile material options for any product or application",
      "Cost-effective solutions for both bulk and small-batch production",
      "Fast turnaround on customized label designs and specifications",
      "High-speed application compatibility for automated production lines",
      "Sustainable paper options for environmentally conscious brands",
    ],
  },
  leaflets: {
    id: "leaflets",
    name: "Leaflets & Product Inserts",
    description:
      "Precisely folded, detailed leaflets and package inserts, critical for pharmaceuticals and consumer goods where clear, comprehensive information is required. Available in ultra-thin and miniature fold formats.",
    images: [img9, img10, img11, img12],
    imageLabels: ["Pharma Leaflet", "Instruction Manual", "Product Leaflet", "Folded Leaflet"],
    features: [
      "Miniature and Perforated Folds",
      "High-Clarity Text Reproduction",
      "Compliant with Pharma Standards",
      "Multiple Paper Stock Weights",
    ],
    applications: [
      "Medical Prescription Inserts",
      "Instruction Manuals (IFA)",
      "Product Promotion Handouts",
      "Warranty Cards",
    ],
    category: "marketing",
    specifications: [
      "Paper: 40 GSM to 150 GSM ultra-lightweight stock",
      "Folding: Up to 12 parallel or cross folds",
      "Printing: Single to full-color printing",
      "Finishing: Creasing and perforating available",
    ],
    benefits: [
      "Fit maximum information into minimal packaging space",
      "Professional and easy-to-read presentation",
      "Reduced paper waste with thin stock options",
      "Ensures critical information is always packaged with the product",
    ],
  },
  "corrugated-boxes": {
    id: "corrugated-boxes",
    name: "Corrugated Boxes (E-commerce & Shipping)",
    description:
       "Robust, multi-ply corrugated cardboard boxes built for shipping, storage, and heavy-duty product protection. Custom-engineered for stacking strength and cushioning during transit. We specialize in various corrugated box types including E-Flute Cartons (thin, lightweight for retail packaging), Universal Boxes (versatile all-purpose shipping boxes), and NF Cartons (non-fluted corrugated for specialized applications).",
    images: [img21, img22, img23, img24],
    imageLabels: ["E-commerce Box", "Shipping Box", "Display Box", "Heavy Duty Box"],
    features: [
      "High Bursting Strength (BF)",
      "Custom Flute Types (E, B, C, EB)",
      "Die-Cut Self-Locking Designs",
      "Flexographic Printing for Branding",
    ],
    applications: [
      "E-commerce Shipping Boxes",
      "Bulk Industrial Goods",
      "Display-Ready Packaging (RRP)",
      "Gift & Subscription Boxes",
    ],
    category: "packaging",
    specifications: [
      "Materials: Single-wall, double-wall, and triple-wall corrugated board",
      "Printing: Up to 4 colors Flexo printing",
      "Structure: RSC, die-cut mailers, half-slotted boxes",
      "Sustainability: High recycled content options available",
    ],
    benefits: [
      "Superior product protection against drops and impacts",
      "Optimized for palletization and warehouse stacking",
      "Eco-friendly and fully recyclable",
      "Reduces shipping damages and return costs",
    ],
  },
  "promotional-material": {
    id: "promotional-material",
    name: "Promotional Material & Display Graphics",
    description:
      "Bespoke marketing and point-of-sale materials, including calendars, danglers, posters, and shelf talkers, designed to capture customer attention and drive sales in retail environments.",
    images: [img17, img18, img19, img20],
    imageLabels: ["Corporate Calendar", "Dangler Display", "Promotional Poster", "POS Signage"],
    features: [
      "Vibrant UV Printing",
      "Durable Card Stock",
      "Custom Die-Cutting for Unique Shapes",
      "Integrated Easel/Stand Options",
    ],
    applications: [
      "Retail Point-of-Sale (POS)",
      "Corporate Calendars",
      "Trade Show Giveaways",
      "In-Store Signage & Danglers",
    ],
    category: "promotional",
    specifications: [
      "Material: 250-400 GSM art card, PVC, or specialty board",
      "Finishing: Lamination, UV spot, and holographic effects",
      "Types: Table/Wall Calendars, Posters, Display Stands",
      "Size: Standard and custom large formats",
    ],
    benefits: [
      "Immediate attention-grabbing in high-traffic areas",
      "Long-lasting quality for extended promotional periods",
      "Reinforces brand message at the point of purchase",
      "Completely customizable to match campaign themes",
    ],
  },
};

// Convert to array format for listing
export const productCategories = Object.values(productData);

// Category filter data
const countPackaging = productCategories.filter(
  (p) => p.category === "packaging",
).length; // 2
const countLabels = productCategories.filter(
  (p) => p.category === "labels",
).length; // 1
const countMarketing = productCategories.filter(
  (p) => p.category === "marketing",
).length; // 1
const countPromotional = productCategories.filter(
  (p) => p.category === "promotional",
).length; // 1

export const categories = [
  { id: "all", name: "All Products", count: productCategories.length },
  { id: "packaging", name: "Packaging", count: countPackaging },
  { id: "labels", name: "Labels", count: countLabels },
  { id: "marketing", name: "Marketing", count: countMarketing },
  { id: "promotional", name: "Promotional", count: countPromotional },
  // The 'publishing' category from the old list is removed as it has 0 products in the new list.
];