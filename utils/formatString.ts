// Function to generate a slug based on the title
export function generateSlug(title: string) {
  return title.toLowerCase().replace(/\s+/g, "-");
}
