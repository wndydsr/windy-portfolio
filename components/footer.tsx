import { Download } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-blue-800 via-blue-900 to-purple-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-xl font-bold text-blue-200">Windy Destiana Sari</div>
            <p className="mt-2 text-blue-100 max-w-md text-sm"></p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <Button
              asChild
              variant="ghost"
              className="text-blue-200 hover:bg-blue-800 hover:text-blue-100 mb-2 transition-all duration-300"
            >
              <a href="/windy-cv.pdf" download>
                Download CV <Download className="ml-1 h-4 w-4" />
              </a>
            </Button>
            <p className="text-blue-300 text-xs">&copy; {currentYear} Windy Destiana Sari. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
