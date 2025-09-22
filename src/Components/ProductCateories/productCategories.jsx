import React, { useState, useEffect } from "react";
import "./productCategories.css";

const categories = [
  {
    name: "Tapes",
    subcategories: [
      "Masking Tapes (high-temp, low-residue)",
      "Double-Sided Tapes",
      "PTFE / Teflon Tapes",
      "Electrical Insulating Tapes",
      "Foil Tapes (Aluminum, Copper)",
      "Structural Bonding Tapes",
      "Flame Retardant Tapes",
      "Surface Protection Tapes"
    ]
  },
  {
    name: "Adhesive Films",
    subcategories: [
      "Epoxy-Based Films",
      "Thermosetting Films",
      "Structural Adhesive Films",
      "Heat-Activated Films",
      "Film Prepregs (used with composites)"
    ]
  },
  {
    name: "Sealants",
    subcategories: [
      "Fuel Tank Sealants",
      "Firewall Sealants",
      "Weather/Environmental Sealants",
      "Windshield & Canopy Sealants",
      "Access Door Sealants",
      "RTV (Room-Temperature Vulcanizing) Sealants",
      "Low Outgassing Sealants (for space use)"
    ]
  },
  {
    name: "Threadlockers",
    subcategories: [
      "Permanent Threadlockers",
      "Removable Threadlockers",
      "High-Temperature Threadlockers",
      "Medium Strength Threadlockers",
      "Wicking Grade Threadlockers"
    ]
  },
  {
    name: "Mold Release",
    subcategories: [
      "Silicone-Based Mold Releases",
      "Non-Silicone Mold Releases",
      "Semi-Permanent Mold Releases",
      "Water-Based Mold Releases",
      "Wax-Based Mold Releases"
    ]
  },
  {
    name: "Shop Consumables",
    subcategories: [
      "Wipes & Rags (lint-free, pre-saturated)",
      "Gloves (nitrile, latex, anti-static)",
      "Mixing Cups & Sticks",
      "Tapes & Masking Supplies",
      "Brushes & Applicators",
      "Bottles & Dispensers",
      "Personal Protective Equipment (PPE)"
    ]
  },
  {
    name: "Hardwares",
    subcategories: [
      "Fasteners (bolts, nuts, rivets)",
      "Bearings",
      "Bushings",
      "Clamps & Clips",
      "Connectors & Fittings",
      "Pins (dowel, cotter, clevis)",
      "Springs",
      "Washers & Spacers"
    ]
  },
  {
    name: "Paints & Coatings",
    subcategories: [
      "Primer Paints ",
      "Top Coats ",
      "Anti-Corrosion Coatings",
      "Heat-Resistant Coatings",
      "Conductive Coatings",
      "Fuel-Resistant Coatings",
      "Camouflage Coatings"
    ]
  },
  {
    name: "Chemicals & Cleaners",
    subcategories: [
      "Solvents ",
      "Surface Prep Cleaners",
      "Degreasers",
      "Descalers",
      "Alkaline & Acidic Cleaners",
      "Paint Removers",
      "Anti-Static Cleaners"
    ]
  },
  {
    name: "Lubricants & Oils",
    subcategories: [
      "Greases",
      "Hydraulic Fluids",
      "Turbine Oils",
      "Anti-Seize Compounds",
      "Penetrating Oils",
      "Dry Film Lubricants"
    ]
  },
  {
    name: "Adhesives",
    subcategories: [
      "Epoxy Adhesives",
      "Cyanoacrylate Adhesives",
      "Polyurethane Adhesives",
      "Acrylic Adhesives",
      "Anaerobic Adhesives",
      "Structural Adhesives",
      "Flexible Adhesives"
    ]
  },
  {
    name: "Rotables & Expendables",
    subcategories: [
      "Rotables:",
      "Landing Gears",
      "Actuators",
      "Avionics Units",
      "Hydraulic Pumps",
      "Expendables:",
      "Filters",
      "Gaskets",
      "O-rings",
      "Lamps & Bulbs",
      "Fuses",
      "Safety Wires",
      "Screws/Nuts"
    ]
  }
];

const ProductCategories = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  const openModal = (category) => {
    setSelectedCategory(category);
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
    setSelectedCategory(null);
  };

  return (
    <div className="categories-container">
      {categories.map((category, idx) => (
        <button
          key={idx}
          className="category-button"
          onClick={() => openModal(category)}
        >
          {category.name}
        </button>
      ))}

      {modalOpen && selectedCategory && (
        <div className="category-modal-overlay" onClick={closeModal}>
          <div className="category-modal" onClick={e => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal}>&times;</button>
            <h2 className="modal-category-title">{selectedCategory.name}</h2>
            <ul className="modal-subcategory-list">
              {selectedCategory.subcategories.map((sub, i) => (
                <li key={i}>{sub}</li>
              ))}
            </ul>
            <form className="modal-query-form" action="https://formsubmit.co/sales@rsraviation.com" method="POST">
              <input type="hidden" name="category" value={selectedCategory.name} />
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Your Query" required></textarea>
              <button type="submit">Send Query</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCategories;