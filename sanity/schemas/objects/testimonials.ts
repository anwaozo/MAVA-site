export default {
  name: 'testimonials',
  type: 'object',
  title: 'Testimonials',
  fields: [
    { name: 'items', type: 'array', title: 'Testimonials', of: [{ type: 'testimonialItem' }] },
  ],
}
