export const metadata = {
  title: "Heating Service",
  description: "Mark J Ahern heating service",
};

const Heating = () => {
  return (
    <div className="flex justify-center mb-20">
      <ul className="[&>li]:pl-3 [&>h4]:text-xl [&>h4]:mt-6 [&>h4]:pb-2 [&>h4]:font-semibold text-justify list-disc w-2/3">
        <h4 className="">Efficient Condensing Boilers:</h4>
        <li>
          Condensing boilers are highly efficient, modern heating systems that
          are commonly used in residential and commercial buildings. They work
          by burning natural gas or oil to heat water, and the heat exchanger in
          the boiler captures and utilizes the heat from the exhaust gases that
          would otherwise be wasted in traditional boilers.
        </li>
        <li>
          The condensing process allows these boilers to achieve higher energy
          efficiency, as it extracts additional heat from the flue gases,
          resulting in lower fuel consumption and reduced energy bills.
        </li>
        <h4 className="text-xl">Forced Hot Water Boilers/Systems:</h4>
        <li>
          Forced hot water systems, also known as hydronic heating systems, use
          a boiler to heat water, and then pumps circulate the hot water through
          pipes to radiators, baseboard heaters, or radiant floor heating
          systems.
        </li>
        <li>
          They are known for their even and consistent heating, providing a
          comfortable indoor environment. They are often preferred for their
          efficiency and versatility.
        </li>
        <h4>Steam Boilers/Systems:</h4>
        <li>
          Steam boilers use heat to turn water into steam, and the steam is then
          circulated through pipes to radiators or convectors to heat a space.
          They are commonly found in older buildings.
        </li>
        <li>
          While steam systems are durable and can provide consistent heat, they
          tend to be less energy-efficient compared to hot water systems and may
          have slower response times.
        </li>
        <h4>Forced Hot Air:</h4>
        <li>
          Forced hot air systems use a furnace to heat air, which is then blown
          through ducts to various rooms in a building via vents or registers.
        </li>
        <li>
          These systems are quick to respond and can be used for both heating
          and cooling by integrating an air conditioner or heat pump. They are
          commonly found in many residential homes.
        </li>
        <h4>Hydro Air Systems:</h4>
        <li>
          Hydro air systems combine elements of both forced hot water and forced
          hot air systems. They use a boiler to heat water, which is then
          circulated through coils in an air handler unit. The air handler blows
          air over the coils to distribute warm air throughout the building.
        </li>
        <li>
          Hydro air systems offer the flexibility of using both radiant heating
          (via hot water) and forced hot air heating in a single system.
        </li>
        <h4>Solar Heating Systems:</h4>
        <li>
          Solar heating systems harness energy from the sun to heat a building's
          air or water. There are two main types: passive and active.
        </li>
        <li>
          Passive solar heating uses architectural design and materials to
          capture and store solar heat, while active solar heating uses solar
          collectors (often mounted on rooftops) to collect and transfer heat to
          the building's interior.
        </li>
        <li>
          Solar heating systems are eco-friendly and can significantly reduce
          energy bills, especially in sunny climates.
        </li>
      </ul>
    </div>
  );
};

export default Heating;
