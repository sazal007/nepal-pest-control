import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FileText, Rocket, Lightbulb, Puzzle, ShieldCheck, ArrowUpRight, BarChart3, Calculator, TrendingUp, Database } from 'lucide-react';

const servicesList = [
  {
    icon: Rocket,
    title: "Process Automation Services",
    description: "Our process automation services help businesses automate their repetitive tasks, reducing manual errors and improving efficiency. We can help you identify areas where automation can be implemented and provide customized solutions to meet your business needs.",
    link: "#"
  },
  {
    icon: FileText,
    title: "Accounting and Bookkeeping Services",
    description: "We provide bookkeeping services to help you keep track of your financial transactions and maintain accurate records. Our team of experienced professionals will ensure that your books are up to date and organized.",
    link: "#"
  },
  {
    icon: ShieldCheck,
    title: "Reporting Requirements Services",
    description: "Streamline your reporting processes with our Reporting Requirements Services. We recognize the critical role that accurate and timely reporting plays in business operations. We prepare monthly, quarterly, and annual management reports and customize the reporting to meet specific business needs and goals.",
    link: "#"
  },
  {
    icon: TrendingUp,
    title: "Virtual CFO Services",
    description: "Our Virtual CFO services provide small and mid-sized businesses with the financial expertise they need to make informed decisions and grow their business without the cost of a full-time CFO. Our experienced team of financial professionals can help with budgeting, forecasting, cash flow management, and financial reporting.",
    link: "#"
  },
  {
    icon: BarChart3,
    title: "Dashboard Preparation Services",
    description: "Our dashboard preparation services provide customized dashboards that offer real-time visibility into your company's financial performance. We use advanced analytics tools to create interactive dashboards that provide insights into key performance indicators, financial metrics, and operational data.",
    link: "#"
  },
  {
    icon: Database,
    title: "Data Analysis & Reporting",
    description: "Our data analysis service helps you identify trends and opportunities in your financial data, enabling you to make strategic business decisions. We use the latest tools and techniques to analyze your data and provide you with actionable insights that can help you make informed business decisions.",
    link: "#"
  },
  {
    icon: Calculator,
    title: "Financial Modelling",
    description: "Our Financial Modelling services are tailored to empower businesses with comprehensive and accurate financial insights. We specialize in crafting dynamic financial models that aid in strategic decision-making, scenario analysis, and future planning. Whether you're looking to assess investment opportunities, optimize capital structure, or enhance forecasting accuracy, our team is dedicated to delivering customized financial models that align with your specific business goals.",
    link: "#"
  },
  {
    icon: Puzzle,
    title: "Excel and Google Sheets Modelling",
    description: "Unlock the power of data manipulation & analysis with our Excel & Google Sheets Modelling services. Our experts excel in creating dynamic spreadsheet models that enhance data-driven decision-making. Whether you require intricate financial analysis, interactive dashboards, or collaborative spreadsheet, we leverage the power of Excel & Google Sheets to streamline your data processes. From formula optimization to advanced data visualization, our services are designed to make your spreadsheet experience seamless & impactful.",
    link: "#"
  },
  {
    icon: Lightbulb,
    title: "Budgeting and Financial Services",
    description: "Elevate your financial management with our Budgeting and Financial Services. We understand the crucial role that effective budgeting plays in organizational success. Our experts work closely with you to develop robust budgeting strategies, aligning financial goals with overall business objectives. From cost control measures to performance tracking, our services encompass a holistic approach, ensuring that your budgeting processes are streamlined, transparent, and geared towards sustainable financial growth.",
    link: "#"
  }
];

export const ServiceExplorer = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <SectionHeading 
            tag="[Core Services]"
            title="Our Services"
            italicWord="Services"
            className="mb-0"
          />
          <Button>Collaborate With Us</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((item, idx) => (
            <div key={idx} className="bg-gray-50 p-10 rounded-3xl hover:bg-white hover:shadow-xl hover:border-blue-100 border border-transparent transition-all duration-300 group">
              <div className="w-12 h-12 bg-white text-blue-600 rounded-full flex items-center justify-center mb-8 shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <item.icon size={20} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-sm text-gray-500 mb-8 leading-relaxed">
                {item.description}
              </p>

              <button className="flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                Read More 
                <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center transform group-hover:translate-x-1 transition-transform">
                  <ArrowUpRight size={10} />
                </div>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
