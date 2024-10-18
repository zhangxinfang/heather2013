// You can define a layout by default exporting a React component from a layout.js file. 
// The component should accept a children prop that will be populated with a child layout (if it exists) or a page during rendering.
import {Footer} from "@/app/components/footer"

export default function DashBoardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    console.log("children",children)
    return (
      <html lang="en">
        <body
        >
          {children}
        <Footer/>
        </body>
      </html>
    );
  }