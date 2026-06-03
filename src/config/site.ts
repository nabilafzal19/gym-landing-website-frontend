export const siteConfig = {
  name: "IronPulse Fitness",
  tagline: "Transform Your Body. Transform Your Life.",
  description:
    "Professional trainers, modern equipment, and personalized fitness programs at IronPulse Fitness.",
  url: "https://ironpulse-fitness.com",
  phone: "+1 (555) 123-4567",
  phoneRaw: "15551234567",
  email: "hello@ironpulse-fitness.com",
  address: "2450 Strength Avenue, Downtown, New York, NY 10001",
  workingHours: {
    weekdays: "Mon – Fri: 5:00 AM – 11:00 PM",
    weekend: "Sat – Sun: 6:00 AM – 9:00 PM",
  },
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    youtube: "https://youtube.com",
    twitter: "https://twitter.com",
  },
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215573012!2d-73.9878434!3d40.7484405!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405b403!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus",
  stats: {
    yearsExperience: 12,
    certifiedTrainers: 25,
    happyMembers: "5,000+",
    programs: 50,
  },
} as const;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Trainers", href: "#trainers" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
] as const;

export const programs = [
  {
    id: "weight-training",
    title: "Weight Training",
    description:
      "Build lean muscle with structured barbell and dumbbell programs tailored to your goals.",
    icon: "dumbbell",
  },
  {
    id: "personal-training",
    title: "Personal Training",
    description:
      "One-on-one coaching with certified experts for maximum results and accountability.",
    icon: "user",
  },
  {
    id: "cardio",
    title: "Cardio Fitness",
    description:
      "Boost endurance and heart health with treadmills, bikes, rowing, and HIIT circuits.",
    icon: "heart",
  },
  {
    id: "strength",
    title: "Strength Training",
    description:
      "Progressive overload programs designed to increase power, stability, and performance.",
    icon: "bolt",
  },
  {
    id: "yoga",
    title: "Yoga",
    description:
      "Improve flexibility, balance, and mental clarity with guided yoga sessions.",
    icon: "lotus",
  },
  {
    id: "crossfit",
    title: "CrossFit",
    description:
      "High-intensity functional workouts that challenge every muscle group.",
    icon: "fire",
  },
  {
    id: "zumba",
    title: "Zumba",
    description:
      "Dance-fitness parties that burn calories while you have fun to energizing music.",
    icon: "music",
  },
  {
    id: "fat-loss",
    title: "Fat Loss Programs",
    description:
      "Science-backed nutrition and training plans to shed fat and keep it off.",
    icon: "scale",
  },
] as const;

export const trainers = [
  {
    name: "Marcus Reed",
    specialization: "Strength & Conditioning",
    experience: "10+ years",
    certifications: "NSCA-CSCS, ACE",
    image:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=400&h=500&fit=crop&q=80",
  },
  {
    name: "Sarah Mitchell",
    specialization: "Personal Training & Fat Loss",
    experience: "8+ years",
    certifications: "NASM-CPT, Precision Nutrition",
    image:
      "https://images.unsplash.com/photo-1594381898411-846e7d193883?w=400&h=500&fit=crop&q=80",
  },
  {
    name: "James Chen",
    specialization: "CrossFit & HIIT",
    experience: "7+ years",
    certifications: "CrossFit L2, CPR/AED",
    image:
      "https://images.unsplash.com/photo-1597347316205-36f6c451902a?w=400&h=500&fit=crop&q=80",
  },
  {
    name: "Elena Vasquez",
    specialization: "Yoga & Mobility",
    experience: "9+ years",
    certifications: "RYT-500, FMS Level 2",
    image:
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=400&h=500&fit=crop&q=80",
  },
] as const;

export const whyChooseUs = [
  {
    title: "Certified Trainers",
    description:
      "Every coach holds nationally recognized certifications and ongoing education.",
    icon: "badge",
  },
  {
    title: "Modern Equipment",
    description:
      "State-of-the-art machines, free weights, and functional training zones.",
    icon: "equipment",
  },
  {
    title: "Affordable Membership",
    description:
      "Flexible plans with no hidden fees — premium fitness at fair prices.",
    icon: "wallet",
  },
  {
    title: "Personalized Programs",
    description:
      "Custom workout and nutrition plans built around your body and lifestyle.",
    icon: "clipboard",
  },
  {
    title: "Flexible Timing",
    description:
      "Early morning to late night access so you train on your schedule.",
    icon: "clock",
  },
  {
    title: "Friendly Environment",
    description:
      "A welcoming community that motivates beginners and athletes alike.",
    icon: "users",
  },
] as const;

export const pricingPlans = [
  {
    id: "basic",
    name: "Basic Plan",
    price: 29,
    period: "/month",
    popular: false,
    features: [
      "Gym floor access",
      "Locker room & showers",
      "Cardio equipment",
      "Group fitness (2x/week)",
      "Fitness assessment",
    ],
  },
  {
    id: "standard",
    name: "Standard Plan",
    price: 49,
    period: "/month",
    popular: true,
    features: [
      "Everything in Basic",
      "Unlimited group classes",
      "Free weights & machines",
      "Sauna access",
      "Monthly progress check-in",
      "Guest pass (1/month)",
    ],
  },
  {
    id: "premium",
    name: "Premium Plan",
    price: 79,
    period: "/month",
    popular: false,
    features: [
      "Everything in Standard",
      "4 personal training sessions",
      "Custom meal plan",
      "Priority class booking",
      "Recovery zone access",
      "24/7 gym access",
    ],
  },
] as const;

export const testimonials = [
  {
    name: "David Thompson",
    role: "Lost 35 lbs in 6 months",
    quote:
      "IronPulse changed my life. The trainers pushed me without ever making me feel judged. I've never been stronger or more confident.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
  },
  {
    name: "Priya Sharma",
    role: "Marathon finisher",
    quote:
      "From couch to 26.2 miles — the cardio and strength programs here gave me structure I couldn't find anywhere else.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
  },
  {
    name: "Michael O'Brien",
    role: "Gained 20 lbs muscle",
    quote:
      "Marcus's strength program is no joke. Clean facility, serious equipment, and a community that actually shows up.",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
  },
] as const;

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop&q=80",
    alt: "Modern gym interior with equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1576678927484-cc907957088c?w=800&h=600&fit=crop&q=80",
    alt: "Members working out with weights",
  },
  {
    src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop&q=80",
    alt: "Group fitness class in session",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80",
    alt: "Personal trainer coaching client",
  },
  {
    src: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800&h=600&fit=crop&q=80",
    alt: "Strength training and free weights area",
  },
  {
    src: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&h=600&fit=crop&q=80",
    alt: "CrossFit and functional training zone",
  },
] as const;

export type WhatsAppIntent =
  | "join"
  | "trial"
  | "pricing-basic"
  | "pricing-standard"
  | "pricing-premium"
  | "contact"
  | "program"
  | "general";
