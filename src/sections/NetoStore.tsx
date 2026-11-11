
import {
  ArrowLeft,
  ArrowUpRight,
 
  ShoppingBag,
  ShieldCheck,
  LayoutDashboard,
  PackageCheck,
  Users,
  Heart,
  ShoppingCart,
  CreditCard,
  ClipboardList,
  Search,
  Database,
  Code2,
  Boxes,
  MessageSquare,
  Star,
  BarChart3,
  Smartphone,
  CheckCircle2,
} from "lucide-react";

const highlights = [
  {
    icon: ShoppingBag,
    title: "Complete e-commerce experience",
    text: "A fully integrated shopping platform, from product discovery to checkout and order history.",
  },
  {
    icon: PackageCheck,
    title: "Product & inventory management",
    text: "A dynamic catalog with product details, categories, search, filtering, and stock management.",
  },
  {
    icon: ShieldCheck,
    title: "Customer accounts",
    text: "Registration, authentication, personal accounts, favorites, and personalized shopping features.",
  },
  {
    icon: LayoutDashboard,
    title: "Administration dashboard",
    text: "A centralized interface for managing products, orders, customers, reviews, and messages.",
  },
];

const technologies = [
  {
    name: "HTML5",
    description:
      "Structures pages, forms, navigation, product sections, and interface components.",
  },
  {
    name: "CSS3",
    description:
      "Creates the responsive layout, dark visual identity, gold accents, and consistent styling.",
  },
  {
    name: "JavaScript",
    description:
      "Powers dynamic interactions, form handling, navigation, and interactive components.",
  },
  {
    name: "PHP",
    description:
      "Handles backend operations, authentication, business logic, and database communication.",
  },
  {
    name: "MySQL",
    description:
      "Stores and organizes users, products, orders, and other essential application records.",
  },
];

const customerFeatures = [
  {
    icon: Search,
    title: "Product Catalog & Search",
    description:
      "Customers can explore a dynamic product catalog, browse categories, and use search and filtering tools to find products efficiently.",
  },
  {
    icon: ShoppingBag,
    title: "Product Details",
    description:
      "Each product has a dedicated page featuring images, descriptions, prices, additional information, and customer ratings.",
  },
  {
    icon: Users,
    title: "Registration & Authentication",
    description:
      "Users can create an account, sign in, and access personalized features connected to their customer profile.",
  },
  {
    icon: ShieldCheck,
    title: "Personal Account",
    description:
      "A dedicated customer area provides access to account information and features related to shopping activity.",
  },
  {
    icon: Heart,
    title: "Favorites",
    description:
      "Customers can save products they are interested in and access them later without searching the catalog again.",
  },
  {
    icon: ShoppingCart,
    title: "Shopping Cart",
    description:
      "Selected products are organized in a shopping cart where customers can review their items and the total purchase amount.",
  },
  {
    icon: CreditCard,
    title: "Simulated Checkout",
    description:
      "A checkout process allows customers to confirm their purchases and submit order information. Payments are simulated, not real financial transactions.",
  },
  {
    icon: ClipboardList,
    title: "Order History",
    description:
      "Customers can review previous purchases, inspect order details, and follow the status of their orders.",
  },
];

const adminFeatures = [
  {
    icon: BarChart3,
    title: "Dashboard & Analytics",
    description:
      "An overview of business activity, including total orders, registered customers, revenue information, and other relevant statistics.",
  },
  {
    icon: PackageCheck,
    title: "Product Management",
    description:
      "Administrators can add new products and update existing listings, including descriptions, prices, images, categories, and availability.",
  },
  {
    icon: Boxes,
    title: "Inventory Management",
    description:
      "Stock management tools allow administrators to monitor product quantities and maintain accurate availability information.",
  },
  {
    icon: ClipboardList,
    title: "Order Management",
    description:
      "Administrators can review customer purchases, inspect order details, and update order statuses throughout processing.",
  },
  {
    icon: Users,
    title: "Customer Management",
    description:
      "A centralized section for viewing registered customers and managing relevant customer account information.",
  },
  {
    icon: Star,
    title: "Reviews & Moderation",
    description:
      "Administrators can review customer ratings and comments and manage submitted product reviews.",
  },
  {
    icon: MessageSquare,
    title: "Messages",
    description:
      "A dedicated interface allows administrators to access and read customer messages and inquiries submitted through the platform.",
  },
];

const objectives = [
  "Build a modern, responsive, and intuitive user interface.",
  "Develop a dynamic product catalog with search and filtering.",
  "Implement customer registration and authentication.",
  "Provide favorites and shopping cart functionality.",
  "Create a simulated checkout and order processing system.",
  "Store orders and provide customers with purchase history.",
  "Develop an administration dashboard for store operations.",
  "Integrate PHP backend functionality with a MySQL database.",
];

const skills = [
  "Frontend development with HTML, CSS, and JavaScript",
  "Backend programming with PHP",
  "Relational database management with MySQL",
  "User authentication and account management",
  "E-commerce workflows and order processing",
  "Product and inventory management",
  "Administration dashboard development",
  "Responsive web design",
  "Full-stack application architecture",
];


type ProjectVideoProps = {
  number: string;
  title: string;
  description: string;
  src: string;
};

function ProjectVideo({
  number,
  title,
  description,
  src,
}: ProjectVideoProps) {
  return (
    <section className="netostore-video-section">
      <div className="netostore-video-heading">
        <div>
          <span className="section-label">
            VIDEO PRESENTATION / {number}
          </span>
          <h2>{title}</h2>
        </div>

        <p>{description}</p>
      </div>

      <div className="netostore-video-frame">
        <video
          controls
          playsInline
          preload="metadata"
          aria-label={title}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
      </div>
    </section>
  );
}


export default function NetoStore() {
  return (
    <main className="netostore-page">
      <div className="netostore-wrap">

        {/* BACK BUTTON */}
        <a className="netostore-back" href="/#projects">
          <ArrowLeft size={17} />
          Back to projects
        </a>

        {/* HERO */}
        <div className="netostore-hero">
          <span className="section-label">
            PROJECT SPOTLIGHT / FULL-STACK E-COMMERCE
          </span>

          <h1>
            Meet <span>NetoStore.</span>
          </h1>

          <p>
            A complete e-commerce platform combining modern design,
            customer-focused shopping features, and a comprehensive
            administration system.
          </p>

          <div className="netostore-tags">
            <span>Full-Stack Development</span>
            <span>E-commerce</span>
            <span>PHP & MySQL</span>
            <span>Responsive Design</span>
          </div>
        </div>

        {/* OVERVIEW */}
        <section className="netostore-intro">
          <div>
            <span className="section-label">01 / OVERVIEW</span>
            <h2>More than an online store.</h2>
          </div>

          <div className="netostore-intro-text">
            <p>
              NetoStore was originally developed in 2023 as my
              final project for the IT Systems Technician course,
              where it received a grade of 16 out of 20.
            </p>

            <p>
              Since then, I have continued improving and expanding
              the platform, introducing new features, refining its
              functionality, and enhancing the overall user experience.
            </p>

            <p>
              NetoStore is a full-stack e-commerce application designed
              to provide a modern, intuitive, and functional online
              shopping experience while integrating an administration
              system for managing the store.
            </p>

            <p>
              The project connects a customer-facing interface with
              server-side functionality and a relational database,
              demonstrating the integration of different web
              development technologies.
            </p>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="netostore-features">
          <span className="section-label">
            02 / PROJECT HIGHLIGHTS
          </span>

          <div className="netostore-feature-grid">
            {highlights.map(({ icon: Icon, title, text }) => (
              <article key={title}>
                <Icon size={25} />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <ProjectVideo
  number="01"
  title="Explore the NetoStore storefront."
  description="Discover the homepage, product catalog, search tools, filters, and product details."
  src="/videos/netostore-part1.mp4"
/>

        {/* OBJECTIVES */}
        <section className="netostore-report-section">
          <span className="section-label">
            03 / PROJECT OBJECTIVES
          </span>

          <h2>Built to simulate real e-commerce.</h2>

          <p>
            The main objective of NetoStore was to develop a
            functional e-commerce platform capable of simulating
            the essential operations of an online store.
          </p>

          <div className="netostore-check-list">
            {objectives.map((objective) => (
              <div key={objective}>
                <CheckCircle2 size={18} />
                <span>{objective}</span>
              </div>
            ))}
          </div>
        </section>

        {/* TECHNOLOGIES */}
        <section className="netostore-report-section">
          <span className="section-label">
            04 / TECHNOLOGIES
          </span>

          <h2>Technologies behind the platform.</h2>

          <div className="netostore-detail-grid">
            {technologies.map((technology) => (
              <article
                className="netostore-detail-card"
                key={technology.name}
              >
                <Code2 size={22} />
                <h3>{technology.name}</h3>
                <p>{technology.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CUSTOMER FEATURES */}
        <section className="netostore-report-section">
          <span className="section-label">
            05 / CUSTOMER EXPERIENCE
          </span>

          <h2>Designed around the customer.</h2>

          <p>
            NetoStore brings together the main features of an
            online shopping platform, from browsing products and
            managing accounts to completing simulated purchases.
          </p>

          <div className="netostore-detail-grid">
            {customerFeatures.map(
              ({ icon: Icon, title, description }) => (
                <article
                  className="netostore-detail-card"
                  key={title}
                >
                  <Icon size={23} />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              )
            )}
          </div>
        </section>

        <ProjectVideo
  number="02"
  title="The complete customer journey."
  description="From account registration and login to the shopping cart, simulated checkout, and order history."
  src="/videos/netostore-part2.mp4"
/>

        {/* ADMIN DASHBOARD */}
        <section className="netostore-report-section">
          <span className="section-label">
            06 / ADMINISTRATION SYSTEM
          </span>

          <h2>Complete store management.</h2>

          <p>
            One of NetoStore's most important components is its
            administration dashboard. This centralized interface
            allows administrators to monitor store activity and
            manage essential operations without interacting
            directly with the database.
          </p>

          <div className="netostore-detail-grid">
            {adminFeatures.map(
              ({ icon: Icon, title, description }) => (
                <article
                  className="netostore-detail-card"
                  key={title}
                >
                  <Icon size={23} />
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              )
            )}
          </div>
        </section>

        <ProjectVideo
  number="03"
  title="Behind the administration dashboard."
  description="Explore business statistics, products, inventory, orders, customers, reviews, and customer messages."
  src="/videos/netostore-part3.mp4"
/>

        {/* ARCHITECTURE */}
        <section className="netostore-report-section">
          <span className="section-label">
            07 / SYSTEM ARCHITECTURE
          </span>

          <h2>Connecting every layer.</h2>

          <div className="netostore-detail-grid">
            <article className="netostore-detail-card">
              <Smartphone size={23} />
              <h3>Frontend</h3>
              <p>
                HTML, CSS, and JavaScript are responsible for
                the interface, visual presentation, and user
                interactions across the platform.
              </p>
            </article>

            <article className="netostore-detail-card">
              <Code2 size={23} />
              <h3>Backend</h3>
              <p>
                PHP processes requests, handles authentication,
                executes application logic, and communicates
                with the database.
              </p>
            </article>

            <article className="netostore-detail-card">
              <Database size={23} />
              <h3>Database</h3>
              <p>
                MySQL stores and retrieves information related
                to users, products, orders, and other records
                required by the platform.
              </p>
            </article>
          </div>

          <p>
            For example, when a customer places an order,
            the server processes the information and stores
            it in the database. The customer can later view
            the purchase in their order history, while the
            administrator can access it through the order
            management dashboard.
          </p>
        </section>

        {/* DESIGN */}
        <section className="netostore-report-section">
          <span className="section-label">
            08 / DESIGN & RESPONSIVENESS
          </span>

          <h2>Modern design. Intuitive navigation.</h2>

          <p>
            NetoStore uses a modern visual identity featuring
            dark colors, gold accents, and consistent interface
            components.
          </p>

          <p>
            The layout is designed to make navigation simple
            and accessible, while responsive styling adapts
            the experience to desktop computers, tablets,
            and smartphones.
          </p>
        </section>

        {/* SKILLS */}
        <section className="netostore-report-section">
          <span className="section-label">
            09 / SKILLS DEMONSTRATED
          </span>

          <h2>What I learned and built.</h2>

          <div className="netostore-check-list">
            {skills.map((skill) => (
              <div key={skill}>
                <CheckCircle2 size={18} />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </section>

       


        {/* CONCLUSION */}
        <section className="netostore-report-section">
          <span className="section-label">
            11 / CONCLUSION
          </span>

          <h2>More than a shopping interface.</h2>

          <p>
            NetoStore represents the practical application
            of full-stack web development, combining a
            modern shopping experience with backend
            functionality and relational database management.
          </p>

          <p>
            From product discovery and customer accounts
            to checkout, order history, and administration
            tools, the project demonstrates how multiple
            technologies can work together in a complete
            web application.
          </p>

          <p>
            Originally created as an academic project,
            NetoStore has evolved through continuous
            improvements and remains a demonstration
            of my technical skills and development experience.
          </p>
        </section>

        {/* FOOTER */}
        <div className="netostore-bottom">
          <span>THANKS FOR EXPLORING NETOSTORE</span>

          <a href="/#projects">
            Explore more projects
            <ArrowUpRight size={17} />
          </a>
        </div>

      </div>
    </main>
  );
}
