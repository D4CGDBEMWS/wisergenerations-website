export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface EnrollFormData {
  firstName: string
  lastName: string
  email: string
  age: string
  registrantType: string
  deliveryPreference: string
  diplomaStatus: string
  sponsorName: string
  sponsorEmail: string
  howHeard: string
  message: string
}

export interface PricingTier {
  id: string
  name: string
  price: number
  priceId: string
  description: string
  features: string[]
  highlight: boolean
  badge: string
}
