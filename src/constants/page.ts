import { PageCategory } from "@/types/page_category"

type Props = {
  id: string
  name: PageCategory
}
export const PagesArray: Props[] = [
  { id: "about", name: "About" },
  { id: "experiences", name: "Experiences" },
  { id: "projects", name: "Projects" },
  { id: "blog", name: "Blog" },
  { id: "history", name: "History" },
  { id: "contact", name: "Contact" },
]
