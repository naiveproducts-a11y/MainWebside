import fs from 'fs';

const data = JSON.parse(fs.readFileSync('./src/i18n/products/products-all.json', 'utf8'));

const translations = {
  "bio-shampoo": {
    categoryEn: "Cleaning & Grooming",
    taglineEn: "Natural shampoo, gentle for all pet breeds",
    pitchEn: "A pet cleaning shampoo formulated with natural ingredients. Free from harsh chemicals, gentle on skin and fur. Suitable for all breeds of dogs and cats, including those with sensitive skin.",
    claimsEn: ["No SLS / SLES", "Silicone-free", "Paraben-free", "Alcohol-free"],
    benefitsEn: [
       { titleEn: "Deep Cleaning & Moisturizing", descEn: "Cleans thoroughly without damaging skin balance. Leaves fur soft, shiny, and easy to comb." },
       { titleEn: "Anti-microbial & Deodorizing", descEn: "EcoGuard Plus safely inhibits bacteria, yeast, and fungi." },
       { titleEn: "Gentle for All Breeds", descEn: "Safe for sensitive skin. Helps reduce recurring skin issues." },
       { titleEn: "Natural Ingredients", descEn: "Chamomile + Lavender Oil provide a gentle, relaxing fragrance." }
    ],
    ingredientsEn: [
       { nameEn: "Chamomilla Extract", descEn: "Soothes itching and reduces skin inflammation." },
       { nameEn: "Lavender Oil", descEn: "Soft relaxing scent with natural anti-bacterial properties." },
       { nameEn: "EcoGuard Plus", descEn: "Inhibits bacteria, reduces skin infection risk." },
       { nameEn: "Natural Cleansing Base", descEn: "Gentle cleansing surfactants, SLS/SLES free." }
    ],
    testResultsEn: [
       { labEn: "Kasetsart Univ.", testEn: "Broth Microdilution", resultEn: "Inhibits S. pseudintermedius, P. aeruginosa, E. coli at ≤0.0977%" },
       { labEn: "Kasetsart Univ.", testEn: "Anti-Yeast", resultEn: "Inhibits Malassezia pachydermatis at 1.5625%" },
       { labEn: "In-house QA/QC", testEn: "Stability Test", resultEn: "Stable for 24 months at 30°C" }
    ]
  },
  "shampoo-oil": {
    categoryEn: "Cleaning & Grooming",
    taglineEn: "Natural oil-infused shampoo, intense nourishment for dry coats",
    pitchEn: "Shampoo mixed with natural oils. Gently cleanses fur and skin while providing intense hydration, reducing dryness and itchiness. Perfect for pets with dry or delicate skin.",
    claimsEn: ["Alcohol-Free", "No Paraben", "Triclosan-Free"],
    benefitsEn: [
       { titleEn: "Deep Cleaning", descEn: "With nano-particles from SNEDDS technology penetrating fur and skin." },
       { titleEn: "Intense Nourishment", descEn: "Leaves fur soft, smooth, shiny, and easy to detangle." },
       { titleEn: "Gentle on Sensitive Skin", descEn: "No SLS/SLES, Paraben, or Silicone." },
       { titleEn: "Retains Moisture", descEn: "Does not cause skin dryness, itchiness, or irritation." }
    ],
    ingredientsEn: [
       { nameEn: "Milk Oil", descEn: "Nourishes and moisturizes for a soft, shiny coat." },
       { nameEn: "Mineral Oil", descEn: "Coats the fur and reduces water loss." },
       { nameEn: "SNEDDS Nano System", descEn: "Nanotechnology delivering oils deep into the fur without stickiness." },
       { nameEn: "EcoGuard Plus", descEn: "Preserves the formula safely without parabens." }
    ],
    testResultsEn: [
       { labEn: "Kasetsart Univ.", testEn: "SNEDDS Nano Particle Size", resultEn: "<100 nm nano particles penetrate skin effectively." },
       { labEn: "Clinical Panel", testEn: "Softness Evaluation", resultEn: "93% of users report softer and shinier fur." },
       { labEn: "In-house", testEn: "Stability Test", resultEn: "No separation, stable for 24 months." }
    ]
  },
  "dry-foam": {
    categoryEn: "Cleaning & Grooming",
    taglineEn: "Waterless cleaning, convenient and safe",
    pitchEn: "Dry bath foam for dogs and cats, perfect for pets that dislike bathing. Soft foam, easy to use, dries quickly without stickiness. No rinsing required.",
    claimsEn: ["SLS / SLES Free", "Silicone Free", "Paraben Free"],
    benefitsEn: [
      { titleEn: "Waterless Cleaning", descEn: "Soft foam, fast drying, no rinsing needed." },
      { titleEn: "Reduces Odor & Oiliness", descEn: "Effective cleaning even without water." },
      { titleEn: "Anti-Microbial & Odor Control", descEn: "EcoGuard Plus safely inhibits bacteria and fungi." },
      { titleEn: "Suitable for Sensitive Skin", descEn: "Helps reduce infection risk, safe for pets with wounds." }
    ],
    ingredientsEn: [
      { nameEn: "Disodium Laureth Sulfosuccinate", descEn: "Mild surfactant, reduces irritation." },
      { nameEn: "Polyquaternium-7", descEn: "Retains moisture, prevents fur from drying out." },
      { nameEn: "EcoGuard Plus", descEn: "Anti-bacterial, prevents infections." },
      { nameEn: "Foam Stabilizer", descEn: "Long-lasting fluffy foam." }
    ],
    testResultsEn: [
      { labEn: "Kasetsart Univ.", testEn: "Antibacterial", resultEn: "Inhibits S. pseudintermedius ≤0.0977%" },
      { labEn: "In-house Lab", testEn: "Drying Speed", resultEn: "Air dries in 3-5 minutes, no blow dryer needed." },
      { labEn: "Pet Hotel Field Test", testEn: "User Acceptance", resultEn: "95% of staff preferred." }
    ]
  },
  "coat-treatment": {
    categoryEn: "Cleaning & Grooming",
    taglineEn: "Deep nourishing formula for strong, silky smooth coat",
    pitchEn: "A conditioning treatment developed to gently care for fur and skin. Leaves the coat soft, shiny, tangle-free, and deeply moisturized. Suitable for all breeds.",
    claimsEn: ["Free from SLS / SLES", "Silicone-Free", "Paraben-Free", "Alcohol-Free"],
    benefitsEn: [
      { titleEn: "Deep Nourishment", descEn: "Nano Encapsulation restores hair strength and softness." },
      { titleEn: "Reduces Tangles", descEn: "Increases shine and reduces static electricity." },
      { titleEn: "Protects Skin & Fur", descEn: "EcoGuard Plus inhibits bacteria and fungi." },
      { titleEn: "Brightens the Coat", descEn: "Reduces yellowing and dullness of the fur." }
    ],
    ingredientsEn: [
      { nameEn: "Panthenol (Vitamin B5)", descEn: "Restores dry skin and reduces itchiness." },
      { nameEn: "Nano Silk Protein", descEn: "Coats the fur for a glossy, smooth finish." },
      { nameEn: "EcoGuard Plus", descEn: "Protects against bacteria and fungi." },
      { nameEn: "Nano Encapsulation", descEn: "Delivers active ingredients deep into the fur." }
    ],
    testResultsEn: [
      { labEn: "In-house Lab", testEn: "Hair Strength Test", resultEn: "Increases hair strength by 42%." },
      { labEn: "Clinical Panel", testEn: "Softness Evaluation", resultEn: "98% felt softer fur in 1 use." },
      { labEn: "Kasetsart Univ.", testEn: "Rinsability", resultEn: "Rinses clean in 2 minutes." }
    ]
  },
  "coat-antibac-spray": {
    categoryEn: "Spray & Care",
    taglineEn: "Nourishment and protection in one spray",
    pitchEn: "A pet care spray product that nourishes the coat to be soft and shiny, reduces tangles, and simultaneously inhibits bacteria and reduces odor. Easy to use, no washing off required.",
    claimsEn: ["Perfume-Free", "Alcohol-Free"],
    benefitsEn: [
      { titleEn: "Reduces Tangles & Mats", descEn: "Easy to comb, pain-free grooming." },
      { titleEn: "Deep Nourishment", descEn: "Silk protein, vitamins, and jojoba oil enhance softness and shine." },
      { titleEn: "Pathogen Protection", descEn: "EcoGuard Plus combats bacteria, yeast, and fungi." },
      { titleEn: "Moisturizing", descEn: "Allantoin reduces irritation." }
    ],
    ingredientsEn: [
      { nameEn: "Allantoin", descEn: "Reduces irritation and adds moisture." },
      { nameEn: "Silk Protein", descEn: "Coats the fur for a glossy shine and easy combing." },
      { nameEn: "Jojoba Oil", descEn: "Balances the skin, similar to natural sebum." },
      { nameEn: "EcoGuard Plus", descEn: "Anti-bacterial, reduces odor." }
    ],
    testResultsEn: [
      { labEn: "Kasetsart Univ.", testEn: "Antibacterial", resultEn: "Inhibits MRSP, P. aeruginosa, E. coli ≤0.0977%" },
      { labEn: "Partner Vet Clinic", testEn: "Clinical 14 days", resultEn: "Reduced redness in chronic infections by 78%." },
      { labEn: "In-house", testEn: "Residue Test", resultEn: "No residue left on the coat after use." }
    ]
  },
  "deodorant-spray": {
    categoryEn: "Spray & Care",
    taglineEn: "Captures and breaks down odors at the source",
    pitchEn: "A spray that eliminates unpleasant odors directly from your pet. Leaves a light, safe scent. Non-irritating to the skin and respiratory system.",
    claimsEn: ["Alcohol-Free", "No Paraben", "Triclosan-Free"],
    benefitsEn: [
      { titleEn: "Eliminates Urine & Pet Odors", descEn: "Effectively targets the root cause." },
      { titleEn: "Captures Odor Molecules", descEn: "Neutralizes smells from bacteria and mold." },
      { titleEn: "Prevents Odor Return", descEn: "EcoGuard Plus inhibits bacteria and yeast." },
      { titleEn: "Safe for All Surfaces", descEn: "Does not corrode floors, leaves no stains, clear and non-sticky." }
    ],
    ingredientsEn: [
      { nameEn: "EcoGuard Plus", descEn: "Destroys microbes causing foul odors." },
      { nameEn: "Disodium EDTA", descEn: "Reduces factors contributing to odor." },
      { nameEn: "Allantoin", descEn: "Keeps skin feeling comfortable, not tight." },
      { nameEn: "Natural Fragrance", descEn: "Food-grade essential oils, highly safe." }
    ],
    testResultsEn: [
      { labEn: "Kasetsart Univ.", testEn: "Antibacterial", resultEn: "Kills S. pseudintermedius, P. aeruginosa ≤0.0977%" },
      { labEn: "In-house", testEn: "Odor Panel Test", resultEn: "Reduces odor by 96% in 10 minutes." },
      { labEn: "Clinical", testEn: "Safety", resultEn: "Non-irritating during 30 days of use." }
    ]
  },
  "antifungal-spray": {
    categoryEn: "Spray & Care",
    taglineEn: "Effectively manages Malassezia with EcoGuard Plus",
    pitchEn: "A spray that eliminates fungi and yeast, helping to inhibit the microbes responsible for skin inflammation, itching, and dandruff. Ideal for moist areas, paws, and around the mouth.",
    claimsEn: ["Silicone-Free", "Paraben-Free", "Alcohol-Free"],
    benefitsEn: [
      { titleEn: "Controls Fungi, Yeast & Bacteria", descEn: "Powered by EcoGuard Plus technology." },
      { titleEn: "Restores Skin Barrier", descEn: "Reduces itching and inflammation." },
      { titleEn: "Increases Moisture", descEn: "Relieves skin irritation." },
      { titleEn: "Suitable for All Breeds", descEn: "Especially designed for sensitive or fungal-prone skin." }
    ],
    ingredientsEn: [
      { nameEn: "EcoGuard Plus", descEn: "Anti-microbial, destroys fungal cell membranes." },
      { nameEn: "Tea Tree Oil Nano", descEn: "Natural anti-fungal properties." },
      { nameEn: "Zinc Pyrithione", descEn: "Reduces dandruff at safe concentration levels." },
      { nameEn: "Turmeric Extract", descEn: "Reduces fungal-induced inflammation." }
    ],
    testResultsEn: [
      { labEn: "Kasetsart Univ.", testEn: "Anti-Yeast Test", resultEn: "Inhibits Malassezia pachydermatis at 1.5625%" },
      { labEn: "Kasetsart Univ.", testEn: "Antibacterial", resultEn: "Inhibits 4 species ≤0.0977%" },
      { labEn: "Partner Vet Clinic", testEn: "Clinical 21 days", resultEn: "Visibly reduces redness, itching, and dandruff." }
    ]
  },
  "eye-ear-cleaner": {
    categoryEn: "Spray & Care",
    taglineEn: "Gentle cleaning, non-irritating",
    pitchEn: "A gentle cleaning product that helps remove tear stains, dirt around the eyes and ears. Coats and protects, reducing moisture build-up and dirt accumulation.",
    claimsEn: ["Alcohol-Free", "No Paraben", "Triclosan-Free"],
    benefitsEn: [
      { titleEn: "Coats & Protects Ears", descEn: "Reduces moisture accumulation." },
      { titleEn: "Inhibits Yeast & Bacteria", descEn: "Targets the causes of musty odors." },
      { titleEn: "Nourishes Ear Skin", descEn: "Reduces irritation, redness, and itching." },
      { titleEn: "Reduces Unpleasant Odors", descEn: "Noticeably cleaner ears." }
    ],
    ingredientsEn: [
      { nameEn: "Disodium EDTA", descEn: "Reduces mineral stain build-up." },
      { nameEn: "Polysorbate 20", descEn: "Removes sebum, earwax, and dirt." },
      { nameEn: "EcoGuard Plus", descEn: "Anti-bacterial, reduces odor." },
      { nameEn: "Chamomile Distillate", descEn: "Soothes and reduces inflammation." }
    ],
    testResultsEn: [
      { labEn: "Kasetsart Univ.", testEn: "Antibacterial", resultEn: "Inhibits eye & ear microbes 99.5% in 1 min." },
      { labEn: "Partner Vet Clinic", testEn: "Eye Irritation", resultEn: "Non-irritant (Draize Score 0)" },
      { labEn: "Clinical 30 days", testEn: "Tear Stain Reduction", resultEn: "Reduces tear stains by 76% in short-faced dogs." }
    ]
  },
  "skin-repair-gel": {
    categoryEn: "Skin & Powder",
    taglineEn: "Accelerates tissue regeneration and wound healing",
    pitchEn: "A recovery gel that speeds up the healing process for wounds, rashes, and hot spots. Promotes rapid tissue regeneration while protecting against secondary skin infections. Safe to lick.",
    claimsEn: ["Lick Safe", "Steroid-Free", "Antibiotic-Free"],
    benefitsEn: [
      { titleEn: "Rapid Wound Healing", descEn: "Stimulates collagen production and cell renewal." },
      { titleEn: "Relieves Itching & Redness", descEn: "Instantly soothes hot spots and rashes." },
      { titleEn: "Protective Barrier", descEn: "Forms a breathable layer over the skin." },
      { titleEn: "Prevents Infection", descEn: "Inhibits harmful bacteria without antibiotics." }
    ],
    ingredientsEn: [
      { nameEn: "Centella Asiatica Extract", descEn: "Promotes collagen synthesis and wound healing." },
      { nameEn: "Aloe Vera Gel", descEn: "Soothes and moisturizes inflamed skin." },
      { nameEn: "EcoGuard Plus", descEn: "Prevents bacterial growth on broken skin." },
      { nameEn: "Vitamin E", descEn: "Reduces scarring and promotes tissue repair." }
    ],
    testResultsEn: [
      { labEn: "Kasetsart Univ.", testEn: "Wound Healing Assay", resultEn: "Accelerates closure by 40% compared to control." },
      { labEn: "Partner Vet Clinic", testEn: "Clinical Efficacy", resultEn: "Hot spots visibly improved in 48 hours." },
      { labEn: "In-house Lab", testEn: "Toxicity Test", resultEn: "100% safe if ingested in small amounts." }
    ]
  },
  "tear-stain-powder": {
    categoryEn: "Skin & Powder",
    taglineEn: "Effectively dries up tears and removes stains",
    pitchEn: "A specialized powder designed to absorb excess moisture around the eyes, preventing tear stains and inhibiting the yeast responsible for reddish-brown discoloration.",
    claimsEn: ["Talc-Free", "Bleach-Free", "Safe for Eyes"],
    benefitsEn: [
      { titleEn: "Absorbs Moisture", descEn: "Keeps the under-eye area dry, preventing bacterial growth." },
      { titleEn: "Reduces Reddish Stains", descEn: "Targets Porphyrin stains effectively." },
      { titleEn: "Inhibits Yeast Growth", descEn: "Stops the root cause of tear stain odors." },
      { titleEn: "Gentle Formula", descEn: "Safe for use near the delicate eye area." }
    ],
    ingredientsEn: [
      { nameEn: "Boric Acid", descEn: "Natural antiseptic that prevents yeast overgrowth." },
      { nameEn: "Corn Starch", descEn: "Absorbs excess moisture securely." },
      { nameEn: "Zinc Oxide", descEn: "Soothes irritated skin and acts as a barrier." },
      { nameEn: "Chamomile Powder", descEn: "Reduces inflammation naturally." }
    ],
    testResultsEn: [
      { labEn: "Clinical Panel", testEn: "Efficacy Test", resultEn: "85% reduction in stain intensity after 14 days." },
      { labEn: "Partner Vet Clinic", testEn: "Ocular Safety", resultEn: "No irritation reported in 50 test subjects." },
      { labEn: "In-house QA/QC", testEn: "Moisture Absorption", resultEn: "Absorbs 3x its weight in moisture." }
    ]
  },
  "body-powder": {
    categoryEn: "Skin & Powder",
    taglineEn: "Keeps the coat dry, fresh, and tick-free",
    pitchEn: "A refreshing body powder that absorbs excess oils and moisture, neutralizes odors, and features natural repellents to help keep ticks and fleas at bay without toxic chemicals.",
    claimsEn: ["Talc-Free", "Chemical Insecticide Free", "Hypoallergenic"],
    benefitsEn: [
      { titleEn: "Odor Neutralization", descEn: "Absorbs foul odors and leaves a fresh scent." },
      { titleEn: "Oil & Moisture Control", descEn: "Keeps the coat fluffy and clean between baths." },
      { titleEn: "Natural Pest Repellent", descEn: "Deters ticks and fleas using essential oils." },
      { titleEn: "Soothes Skin", descEn: "Relieves minor skin irritations and itching." }
    ],
    ingredientsEn: [
      { nameEn: "Arrowroot Powder", descEn: "Natural talc alternative for moisture absorption." },
      { nameEn: "Neem Oil Extract", descEn: "Natural repellent against insects." },
      { nameEn: "Lavender Essential Oil", descEn: "Provides a calming scent and deters bugs." },
      { nameEn: "Baking Soda", descEn: "Neutralizes severe pet odors." }
    ],
    testResultsEn: [
      { labEn: "In-house Lab", testEn: "Repellency Test", resultEn: "70% effective against fleas for up to 48 hours." },
      { labEn: "Consumer Trial", testEn: "Odor Control", resultEn: "Eliminates wet dog smell instantly." },
      { labEn: "Kasetsart Univ.", testEn: "Skin Irritation", resultEn: "Hypoallergenic, safe for daily use." }
    ]
  },
  "custom-formula": {
    categoryEn: "Research & Development",
    taglineEn: "Tailor-made pet products directly from the lab",
    pitchEn: "Our R&D service allows you to conceptualize and develop completely custom pet care formulas utilizing our nano-technology and botanical libraries to fit your unique brand identity.",
    claimsEn: ["Fully Customizable", "Clinical Testing Available", "Exclusive Ownership"],
    benefitsEn: [
      { titleEn: "Unique Brand Identity", descEn: "Formulas made exclusively for your market positioning." },
      { titleEn: "Advanced Nano-Tech", descEn: "Incorporate our proven 84nm encapsulation technology." },
      { titleEn: "Expert Formulation", descEn: "Developed by Nano-Scientists and Veterinarians." },
      { titleEn: "Seamless Scaling", descEn: "From lab prototype to mass production in one facility." }
    ],
    ingredientsEn: [
      { nameEn: "Custom Botanical Blends", descEn: "Select from our premium northern Thai herb library." },
      { nameEn: "Signature Scents", descEn: "Develop a unique fragrance profile for your brand." },
      { nameEn: "Targeted Actives", descEn: "Add specific vitamins or compounds for targeted claims." },
      { nameEn: "EcoGuard Plus Integration", descEn: "Optional inclusion of our proprietary pathogen protection." }
    ],
    testResultsEn: [
      { labEn: "R&D Lab", testEn: "Prototype Development", resultEn: "Initial samples delivered within 7-14 days." },
      { labEn: "Quality Assurance", testEn: "Stability & Efficacy", resultEn: "Rigorous testing guarantees shelf-life & safety." },
      { labEn: "Regulatory", testEn: "Compliance Check", resultEn: "Ensures all formulas meet local and international standards." }
    ]
  }
};

data.products = data.products.map(p => {
  const trans = translations[p.id];
  if (trans) {
    p.categoryEn = trans.categoryEn;
    p.taglineEn = trans.taglineEn || p.tagline;
    p.pitchEn = trans.pitchEn || p.pitch;
    
    // claims
    if (trans.claimsEn) {
       p.claimsInfo = p.claims.map((c, i) => ({ th: c, en: trans.claimsEn[i] || c }));
    } else {
       p.claimsInfo = p.claims.map(c => ({ th: c, en: c }));
    }
    
    // benefits
    if (p.benefits && trans.benefitsEn) {
        p.benefits = p.benefits.map((b, i) => ({
            ...b,
            titleEn: trans.benefitsEn[i]?.titleEn || b.title,
            descEn: trans.benefitsEn[i]?.descEn || b.desc
        }));
    }
    
    // ingredients
    if (p.ingredients && trans.ingredientsEn) {
        p.ingredients = p.ingredients.map((b, i) => ({
            ...b,
            nameEn: trans.ingredientsEn[i]?.nameEn || b.name,
            descEn: trans.ingredientsEn[i]?.descEn || b.desc
        }));
    }
    
    // testResults
    if (p.testResults && trans.testResultsEn) {
        p.testResults = p.testResults.map((b, i) => ({
            ...b,
            labEn: trans.testResultsEn[i]?.labEn || b.lab,
            testEn: trans.testResultsEn[i]?.testEn || b.test,
            resultEn: trans.testResultsEn[i]?.resultEn || b.result
        }));
    }
  } else {
      // fallback
      p.categoryEn = p.categoryTh;
      p.taglineEn = p.tagline;
      p.pitchEn = p.pitch;
      if (p.claims) p.claimsInfo = p.claims.map(c => ({ th: c, en: c }));
      if (p.benefits) p.benefits.forEach(b => { b.titleEn = b.title; b.descEn = b.desc; });
      if (p.ingredients) p.ingredients.forEach(b => { b.nameEn = b.name; b.descEn = b.desc; });
      if (p.testResults) p.testResults.forEach(b => { b.labEn = b.lab; b.testEn = b.test; b.resultEn = b.result; });
  }
  return p;
});

fs.writeFileSync('./src/i18n/products/products-all.json', JSON.stringify(data, null, 2));
console.log('Successfully updated products-all.json with English translations.');
