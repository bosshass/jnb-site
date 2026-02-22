import { Route, Switch } from "wouter";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import CaseStudies from "./pages/CaseStudies";
import BookkeepingAccounting from "./pages/services/BookkeepingAccounting";
import TaxPreparation from "./pages/services/TaxPreparation";
import FractionalCFO from "./pages/services/FractionalCFO";
import FinancialSystems from "./pages/services/FinancialSystems";
import SecurityServices from "./pages/case-studies/SecurityServices";
import HvacServices from "./pages/case-studies/HvacServices";
import ElectricalContracting from "./pages/case-studies/ElectricalContracting";
import PropertyInvestment from "./pages/case-studies/PropertyInvestment";
import BeautySalon from "./pages/case-studies/BeautySalon";
import BusinessConsulting from "./pages/case-studies/BusinessConsulting";
import OwlsTeachBusiness from "./pages/blog/OwlsTeachBusiness";
import LegendOf1000Cranes from "./pages/blog/LegendOf1000Cranes";
import ThePacesetter from "./pages/blog/ThePacesetter";
import TheSpireLesson from "./pages/blog/TheSpireLesson";
import IBuiltTheHouse from "./pages/blog/IBuiltTheHouse";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services/bookkeeping-accounting" component={BookkeepingAccounting} />
      <Route path="/services/tax-preparation" component={TaxPreparation} />
      <Route path="/services/fractional-cfo" component={FractionalCFO} />
      <Route path="/services/financial-systems" component={FinancialSystems} />
      <Route path="/case-studies" component={CaseStudies} />
      <Route path="/case-studies/security-services" component={SecurityServices} />
      <Route path="/case-studies/hvac-services" component={HvacServices} />
      <Route path="/case-studies/electrical-contracting" component={ElectricalContracting} />
      <Route path="/case-studies/property-investment" component={PropertyInvestment} />
      <Route path="/case-studies/beauty-salon" component={BeautySalon} />
      <Route path="/case-studies/business-consulting" component={BusinessConsulting} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/owls-teach-business" component={OwlsTeachBusiness} />
      <Route path="/blog/legend-of-1000-cranes" component={LegendOf1000Cranes} />
      <Route path="/blog/the-pacesetter" component={ThePacesetter} />
      <Route path="/blog/the-spire-lesson" component={TheSpireLesson} />
      <Route path="/blog/i-built-the-house" component={IBuiltTheHouse} />
      <Route component={NotFound} />
    </Switch>
  );
}
