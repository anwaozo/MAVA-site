import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

// Security: Add a secret token to prevent unauthorized revalidation
const REVALIDATE_TOKEN = process.env.SANITY_REVALIDATE_SECRET || 'your-secret-token'

export async function POST(request: NextRequest) {
  try {
    // Verify the request is from Sanity
    const token = request.nextUrl.searchParams.get('token')
    if (token !== REVALIDATE_TOKEN) {
      return NextResponse.json({ message: 'Invalid token' }, { status: 401 })
    }

    const body = await request.json()
    
    // Revalidate specific paths based on document type
    const documentType = body._type || body.document?._type
    
    switch (documentType) {
      // Home page content
      case 'heroSection':
      case 'brands':
      case 'trainEquipSupport':
      case 'ourVision':
      case 'workHighlights':
      case 'successStory':
      case 'testimonial':
      case 'seo':
        revalidatePath('/')
        break
        
      // About page content
      case 'whoWeAre':
      case 'pfoVision':
      case 'whatWeDoSection':
      case 'coreValuesSection':
      case 'valuePropositionSection':
      case 'servicesSection':
      case 'faqSection':
      case 'aboutSeo':
        revalidatePath('/about-us')
        break
        
      // Workshop page content
      case 'shapingLives':
      case 'empoweringCreativesSection':
      case 'workshopSection':
      case 'workshopSeo':
        revalidatePath('/workshops')
        break
        
      // Legacy page content
      case 'pfoLegacySlide':
      case 'notesFromLovers':
      case 'legacySeo':
        revalidatePath('/pfo-legacy')
        break
        
      // Gallery page content
      case 'gallerySection':
      case 'gallerySeo':
        revalidatePath('/gallery')
        break
        
      // Contact page content
      case 'contactSection':
      case 'contactSeo':
        revalidatePath('/contact-us')
        break
        
      // Global content (appears on multiple pages)
      case 'socialMediaLinks':
        // Revalidate all pages since social media links might appear globally
        revalidatePath('/')
        revalidatePath('/about-us')
        revalidatePath('/workshops')
        revalidatePath('/pfo-legacy')
        revalidatePath('/gallery')
        revalidatePath('/contact-us')
        break
        
      default:
        // If document type is unknown, revalidate the home page as a fallback
        revalidatePath('/')
    }
    
    return NextResponse.json({ 
      revalidated: true, 
      documentType,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    console.error('Revalidation error:', error)
    return NextResponse.json({ 
      message: 'Error revalidating',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}

// Optional: Allow GET requests for testing
export async function GET(request: NextRequest) {
  const token = request.nextUrl.searchParams.get('token')
  const path = request.nextUrl.searchParams.get('path')
  
  if (token !== REVALIDATE_TOKEN) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 })
  }
  
  if (!path) {
    return NextResponse.json({ message: 'Path parameter required' }, { status: 400 })
  }
  
  try {
    revalidatePath(path)
    return NextResponse.json({ 
      revalidated: true, 
      path,
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    return NextResponse.json({ 
      message: 'Error revalidating',
      error: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}