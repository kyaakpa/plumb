"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";

const GasServiceAcc = () => {
  const item1 =
    "Oil to gas burner conversions involve replacing an existing oil-based heating system with a more energy-efficient natural gas system. This conversion is a popular choice for homeowners and businesses looking to reduce heating costs and environmental impact. During the conversion,the oil burner and related components are removed, and a new gas burner is installed. Necessary adjustments are made to the fuel delivery system and combustion controls. This transition not only reduces fuel expenses but often results in cleaner and more efficient heating.";

  const item2 =
    "Full gas system installations entail setting up an entire natural gas heating system from scratch. This includes installing the gas lines, gas-fired boilers or furnaces, distribution piping, and heating appliances such as radiators, baseboard heaters, or forced hot air systems. Partial gas system installations may involve integrating a new gas-powered heating appliance into an existing system, such as adding a gas furnace to a forced hot air system that previously used oil or electric heat. These installations are tailored to the specific needs of the property and can improve energy efficiency and heating performance.";

  const item3 =
    "Gas burner maintenance is essential for ensuring the safe and efficient operation of gas heating systems. Routine maintenance involves inspecting and cleaning burners, checking ignition systems, and testing safety controls. Regular maintenance also includes inspecting gas lines for leaks, ensuring proper ventilation and exhaust, and replacing worn or damaged components. Maintenance helps prevent breakdowns, ensures optimal combustion, and extends the lifespan of gas burners and heating equipment.";

  const item4 =
    "Gas efficiency testing, often referred to as combustion analysis, evaluates how efficiently a gas heating system is burning fuel. It measures various factors, such as the ratio of air to fuel, flue gas temperature, and the presence of harmful emissions like carbon monoxide. Efficiency testing helps identify areas where adjustments can be made to improve the system's overall efficiency, reduce fuel consumption, and lower operating costs. It also ensures that the heating system meets safety standards and environmental regulations.";

  return (
    <Accordion
      defaultExpandedKeys={["1"]}
      className="w-3/4 h-[60vh] mx-auto pt-12"
    >
      <AccordionItem
        key="1"
        aria-label="Oil to Gas Burner Conversions"
        title="Oil to Gas Burner Conversions"
      >
        {item1}
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Full/Partial Gas System Installations"
        title="Full/Partial Gas System Installations"
      >
        {item2}
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Gas Burner Maintenance"
        title="Gas Burner Maintenance"
      >
        {item3}
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="Gas Efficiency Testing"
        title="Gas Efficiency Testing"
      >
        {item4}
      </AccordionItem>
    </Accordion>
  );
};

export default GasServiceAcc;
