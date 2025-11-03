export const chatbotData = {
  "start": {
    "response": [
      { "type": "text", "content": "Hello! Welcome to ResoluteAI Software. How can I help you today?" },

    ],
    "options": [
      { "text": "Our Products", "next_id": "products_menu" },
      { "text": "Solutions & Services", "next_id": "services_menu" },
      { "text": "Industries We Serve (Verticals)", "next_id": "verticals_menu" },
      { "text": "About ResoluteAI Software", "next_id": "about_us_menu" },
      { "text": "Contact Us", "next_id": "contact_us" }
    ]
  },

  "products_menu": {
    "response": [
      { "type": "text", "content": "We have developed three proprietary AI Products & Platforms. Which one would you like to know more about?" }
    ],
    "options": [
      { "text": "ZodhaGPT", "next_id": "product_zodhagpt_details" },
      { "text": "FaceGenie", "next_id": "product_facegenie_details" },
      { "text": "AnalyticsKart", "next_id": "product_analyticscart_details" },
      { "text": "Go to Main Menu", "next_id": "start" }
    ]
  },

  "product_zodhagpt_details": {
    "response": [
      { "type": "text", "content": "ZodhaGPT is a GenAI/Agentic AI platform which leverages state-of-the-art Large Language Model (LLM) technology. It offers unparalleled abilities in understanding and generating human-like text and speech across various subjects and contexts. Agentic AI layers in the platform leverage advanced reasoning, goal-driven behavior, and real-world adaptability to complete complex workflows." }
    ],
    "options": [
      { "text": "See ZodhaGPT's Modules", "next_id": "zodhagpt_features_menu" },
      { "text": "Visit ZodhaGPT Page", "next_id": "redirect_zodhagpt" },
      { "text": "See other products", "next_id": "products_menu" },
      { "text": "Go to Main Menu", "next_id": "start" }
    ]
  },
  "redirect_zodhagpt": {
    "response": [
      { "type": "text", "content": "Redirecting you to ZodhaGPT page..." }
    ],
    "options": [],
    "redirect_url": "/zodha-gpt"
  },
  "zodhagpt_features_menu": {
    "response": [
      { "type": "text", "content": "ZodhaGPT is a versatile platform with many modules. Which one are you interested in?" }
    ],
    "options": [
      { "text": "HR Conversational Platform", "next_id": "zodhagpt_feature_hr" },
      { "text": "PSCM Conversational Platform", "next_id": "zodhagpt_feature_pscm" },
      { "text": "Legal Conversational Platform", "next_id": "zodhagpt_feature_legal" },
      { "text": "Quality Process Automation", "next_id": "zodhagpt_feature_quality" },
      { "text": "Shared Services Platform", "next_id": "zodhagpt_feature_shared" },
      { "text": "Multi-domain Conversational Platform", "next_id": "zodhagpt_feature_multidomain" },
      { "text": "Data Visualization Platform", "next_id": "zodhagpt_feature_dataviz" },
      { "text": "Textile 3D Portfolio Management", "next_id": "zodhagpt_feature_textile" },
      { "text": "Health Records Management", "next_id": "zodhagpt_feature_health" },
      { "text": "Document Information Intelligence", "next_id": "zodhagpt_feature_docintel" },
      { "text": "Social Media Analytics", "next_id": "zodhagpt_feature_social" },
      { "text": "Back to Products", "next_id": "products_menu" }
    ]
  },
  "zodhagpt_feature_hr": {
    "response": [
      { "type": "text", "content": "Multi-lingual Agentic AI-led HR Conversational Platform: ZodhaGPT's AI-led HR conversational platform revolutionizes human resource management by automating routine tasks and providing instant support to employees in multiple languages." },
      { "type": "list", "title": "Benefits:", "items": ["24/7 AI-led employee support in multiple languages", "Automated leave management, onboarding, and payroll assistance", "Personalized career growth and training recommendations"] },
      { "type": "list", "title": "Impact:", "items": ["Up to 40% reduction in HR query resolution time", "Enhanced employee satisfaction and engagement"] }
    ],
    "options": [{ "text": "See other ZodhaGPT modules", "next_id": "zodhagpt_features_menu" }, { "text": "Go to Main Menu", "next_id": "start" }]
  },
  "zodhagpt_feature_pscm": {
    "response": [
      { "type": "text", "content": "Multi-lingual Agentic AI-led PSCM Conversational Platform: ZodhaGPT's PSCM platform enhances procurement and supply chain operations by providing AI-led, multi-lingual support for vendor communication, inventory tracking, and order management." },
      { "type": "list", "title": "Benefits:", "items": ["Multi-lingual support for supplier engagement", "Automated order tracking and inventory management", "Real-time market analysis for better decision-making"] },
      { "type": "list", "title": "Impact:", "items": ["Up to 30% cost savings through optimized procurement", "25% faster supplier response time"] }
    ],
    "options": [{ "text": "See other ZodhaGPT modules", "next_id": "zodhagpt_features_menu" }, { "text": "Go to Main Menu", "next_id": "start" }]
  },
  "zodhagpt_feature_legal": {
    "response": [
      { "type": "text", "content": "Multi-lingual Agentic AI-led Legal Conversational Platform: ZodhaGPT's LegalTech platform transforms legal operations by automating contract reviews, legal research, and compliance tracking." },
      { "type": "list", "title": "Benefits:", "items": ["Multi-lingual support for legal documentation and communication", "AI-assisted contract review and compliance tracking", "Instant legal research and case law references"] },
      { "type": "list", "title": "Impact:", "items": ["30% faster contract review and approval", "Enhanced compliance and reduced legal risks"] }
    ],
    "options": [{ "text": "See other ZodhaGPT modules", "next_id": "zodhagpt_features_menu" }, { "text": "Go to Main Menu", "next_id": "start" }]
  },
  "zodhagpt_feature_quality": {
    "response": [
      { "type": "text", "content": "Agentic AI & LLM-based Quality Process Manual Automation: ZodhaGPT automates quality management processes by analyzing production data and identifying patterns that indicate defects or process failures." },
      { "type": "list", "title": "Benefits:", "items": ["Automated quality audits and defect tracking", "AI-driven root cause analysis and corrective action recommendations", "Real-time monitoring of production standards"] },
      { "type": "list", "title": "Impact:", "items": ["35% improvement in quality compliance", "40% faster issue resolution"] }
    ],
    "options": [{ "text": "See other ZodhaGPT modules", "next_id": "zodhagpt_features_menu" }, { "text": "Go to Main Menu", "next_id": "start" }]
  },
  "zodhagpt_feature_shared": {
    "response": [
      { "type": "text", "content": "Agentic AI-led Shared Services Conversational Platform: ZodhaGPT's shared services platform centralizes and automates enterprise-wide support functions, including IT, finance, and HR." },
      { "type": "list", "title": "Benefits:", "items": ["Multi-lingual support for shared services across departments", "AI-driven ticketing, query handling, and resolution", "Personalized employee support for IT, finance, and HR"] },
      { "type": "list", "title": "Impact:", "items": ["50% reduction in support ticket resolution time", "Enhanced employee satisfaction and faster response rates"] }
    ],
    "options": [{ "text": "See other ZodhaGPT modules", "next_id": "zodhagpt_features_menu" }, { "text": "Go to Main Menu", "next_id": "start" }]
  },
  "zodhagpt_feature_multidomain": {
    "response": [
      { "type": "text", "content": "Multi-domain/Agentic AI Conversational Platform: ZodhaGPT's multi-domain conversational platform offers intelligent, real-time support across various industries and functions." },
      { "type": "list", "title": "Benefits:", "items": ["Domain-specific AI-driven automation", "Multi-lingual conversational support", "Seamless integration with existing business systems"] },
      { "type": "list", "title": "Impact:", "items": ["60% increase in customer query resolution speed", "Enhanced user experience and reduced operational costs"] }
    ],
    "options": [{ "text": "See other ZodhaGPT modules", "next_id": "zodhagpt_features_menu" }, { "text": "Go to Main Menu", "next_id": "start" }]
  },
  "zodhagpt_feature_dataviz": {
    "response": [
      { "type": "text", "content": "Agentic AI/LLM-Led Data Visualization Platform: ZodhaGPT's data analytics and visualization platform converts complex datasets into clear, actionable insights." },
      { "type": "list", "title": "Benefits:", "items": ["Real-time data analysis and trend prediction", "Interactive dashboards with AI-generated insights", "Predictive modeling for better decision-making"] },
      { "type": "list", "title": "Impact:", "items": ["40% improvement in data interpretation accuracy", "Faster decision-making and strategy planning"] }
    ],
    "options": [{ "text": "See other ZodhaGPT modules", "next_id": "zodhagpt_features_menu" }, { "text": "Go to Main Menu", "next_id": "start" }]
  },
  "zodhagpt_feature_textile": {
    "response": [
      { "type": "text", "content": "Agentic AI/LLM-Led Textile 3D Product Portfolio Management: ZodhaGPT's textile platform enables 3D product portfolio management, streamlining product design, production tracking, and inventory control." },
      { "type": "list", "title": "Benefits:", "items": ["AI-generated 3D product simulations", "Automated catalog management and production tracking", "Enhanced demand forecasting"] },
      { "type": "list", "title": "Impact:", "items": ["30% reduction in design-to-market time", "20% increase in inventory turnover"] }
    ],
    "options": [{ "text": "See other ZodhaGPT modules", "next_id": "zodhagpt_features_menu" }, { "text": "Go to Main Menu", "next_id": "start" }]
  },
  "zodhagpt_feature_health": {
    "response": [
      { "type": "text", "content": "Gen AI-led Health Records Management Platform: ZodhaGPT's healthcare platform automates patient record management, ensuring secure and efficient handling of clinical data." },
      { "type": "list", "title": "Benefits:", "items": ["AI-driven patient record consolidation and analysis", "Automated scheduling and diagnosis assistance", "Enhanced patient data privacy and security"] },
      { "type": "list", "title": "Impact:", "items": ["25% faster patient record retrieval", "Improved patient outcomes and operational efficiency"] }
    ],
    "options": [{ "text": "See other ZodhaGPT modules", "next_id": "zodhagpt_features_menu" }, { "text": "Go to Main Menu", "next_id": "start" }]
  },
  "zodhagpt_feature_docintel": {
    "response": [
      { "type": "text", "content": "Gen AI/LLM-Led Document Information Intelligence: ZodhaGPT's document intelligence platform automates data extraction from structured and unstructured documents." },
      { "type": "list", "title": "Benefits:", "items": ["AI-based data extraction and validation", "Multi-format document processing", "Enhanced accuracy and compliance tracking"] },
      { "type": "list", "title": "Impact:", "items": ["40% faster document processing", "30% improvement in data accuracy"] }
    ],
    "options": [{ "text": "See other ZodhaGPT modules", "next_id": "zodhagpt_features_menu" }, { "text": "Go to Main Menu", "next_id": "start" }]
  },
  "zodhagpt_feature_social": {
    "response": [
      { "type": "text", "content": "Gen AI-led Social Media Analytics: ZodhaGPT's social media analytics platform monitors social channels in real time, analyzing audience sentiment, engagement patterns, and competitor performance." },
      { "type": "list", "title": "Benefits:", "items": ["AI-driven sentiment analysis and trend detection", "Automated content performance tracking", "Competitor benchmarking and strategic recommendations"] },
      { "type": "list", "title": "Impact:", "items": ["50% increase in engagement rate", "Improved content strategy and audience targeting"] }
    ],
    "options": [{ "text": "See other ZodhaGPT modules", "next_id": "zodhagpt_features_menu" }, { "text": "Go to Main Menu", "next_id": "start" }]
  },

  "product_facegenie_details": {
    "response": [
      { "type": "text", "content": "FaceGenie Dynamic is a Gen AI led computer vision-powered 360-degree tracking software for human faces, assets & objects - their movements, any events & incidents, process automation & compliances - with real-time alerts, text and speech driven analytics & reports for proactive action thus making campuses across industries - safe, secure, hygienic, and touchless." }
    ],
    "options": [
      { "text": "See FaceGenie's Modules", "next_id": "facegenie_features_menu" },
      { "text": "Visit Facegenie Page", "next_id": "redirect_facegenie" },
      { "text": "See other products", "next_id": "products_menu" },
      { "text": "Go to Main Menu", "next_id": "start" }
    ]
  },

  "redirect_facegenie": {
    "response": [
      { "type": "text", "content": "Redirecting you to Facegenie page..." }
    ],
    "options": [],
    "redirect_url": "/face-genie"
  },
  "facegenie_features_menu": {
    "response": [
      { "type": "text", "content": "FaceGenie has numerous computer vision modules. Which one would you like to explore?" }
    ],
    "options": [
      { "text": "App for Counting Items", "next_id": "facegenie_feature_counting" },
      { "text": "Defect Detection on Conveyors", "next_id": "facegenie_feature_defect" },
      { "text": "Retail Store Analytics", "next_id": "facegenie_feature_retail" },
      { "text": "Time & Motion Analysis", "next_id": "facegenie_feature_time_motion" },
      { "text": "Volumetric Box Analysis", "next_id": "facegenie_feature_box" },
      { "text": "Shelf Occupancy Analytics", "next_id": "facegenie_feature_shelf" },
      { "text": "Label Print Verification", "next_id": "facegenie_feature_label" },
      { "text": "Entry and Exit Detection", "next_id": "facegenie_feature_entry_exit" },
      { "text": "Work Efficiency Tracking", "next_id": "facegenie_feature_efficiency" },
      { "text": "Smart Parking Solution", "next_id": "facegenie_feature_parking" },
      { "text": "Clean Room Analytics", "next_id": "facegenie_feature_clean_room" },
      { "text": "Barrel Verification", "next_id": "facegenie_feature_barrel" },
      { "text": "Face/Voice Access Control", "next_id": "facegenie_feature_access" },
      { "text": "Geofencing & Perimeter Safety", "next_id": "facegenie_feature_geofence" },
      { "text": "Fire and Violence Detection", "next_id": "facegenie_feature_fire" },
      { "text": "Face ID & Demographics", "next_id": "facegenie_feature_faceid" },
      { "text": "Crowd Detection", "next_id": "facegenie_feature_crowd" },
      { "text": "Person Fall Detection", "next_id": "facegenie_feature_fall" },
      { "text": "Drone Video Analytics", "next_id": "facegenie_feature_drone" },
      { "text": "Back to Products", "next_id": "products_menu" }
    ]
  },
  "facegenie_feature_counting": { "response": [{ "type": "text", "content": "Android & iOS App for Counting Items: FaceGenie's mobile-based item counting solution enables users to scan and count objects with precision using Android and iOS devices." }, { "type": "list", "title": "Industries:", "items": ["Retail, E-commerce & Marketplaces", "FMCG", "Logistics, Warehousing & Transportation"] }, { "type": "list", "title": "Benefits:", "items": ["Faster and more reliable item counting", "Reduced dependency on manual labor", "Easy mobile accessibility for real-time tracking"] }, { "type": "list", "title": "Impact:", "items": ["Improved operational accuracy and significant time savings in inventory management."] }], "options": [{ "text": "See other FaceGenie modules", "next_id": "facegenie_features_menu" }, { "text": "Go to Main Menu", "next_id": "start" }] },
  "facegenie_feature_defect": { "response": [{ "type": "text", "content": "Defect Detection & Counting on High-Speed Conveyors: FaceGenie's AI-powered system detects defects and counts products moving at high speeds on conveyor belts." }, { "type": "list", "title": "Industries:", "items": ["Textile, Fabric & Yarn", "FMCG", "Consumer Product & Electronic Goods", "Automotives, Ancillaries & Heavy Engineering"] }, { "type": "list", "title": "Benefits:", "items": ["Automated quality checks for defect-free products", "Reduced waste and rework costs", "Improved production efficiency with minimal manual intervention"] }, { "type": "list", "title": "Impact:", "items": ["Higher product quality, fewer recalls, and better customer satisfaction."] }], "options": [{ "text": "See other FaceGenie modules", "next_id": "facegenie_features_menu" }, { "text": "Go to Main Menu", "next_id": "start" }] },
  "facegenie_feature_retail": { "response": [{ "type": "text", "content": "Retail Store Analytics: FaceGenie leverages advanced video analytics to monitor customer behavior, footfall patterns, staff interactions and many more in real time." }, { "type": "list", "title": "Industries:", "items": ["Retail & E-commerce", "FMCG"] }, { "type": "list", "title": "Benefits:", "items": ["Optimized store layout based on heatmaps and dwell time", "Improved customer service through staff allocation analytics", "Real-time insights into peak hours and footfall trends"] }, { "type": "list", "title": "Impact:", "items": ["Increased sales conversion and customer satisfaction through data-backed retail strategy."] }], "options": [{ "text": "See other FaceGenie modules", "next_id": "facegenie_features_menu" }, { "text": "Go to Main Menu", "next_id": "start" }] },
  "facegenie_feature_time_motion": { "response": [{ "type": "text", "content": "Time & Motion Analysis: By analyzing worker movements and task durations, FaceGenie provides valuable insights into process efficiency." }, { "type": "list", "title": "Industries:", "items": ["Power, Energy & Industrial Automation", "Logistics, Warehousing & Transportation", "Real Estate, Construction & Technology Parks"] }, { "type": "list", "title": "Benefits:", "items": ["Enhanced workforce management through data-driven insights", "Reduced idle time and improved operational efficiency", "Better resource allocation for optimized workflows"] }, { "type": "list", "title": "Impact:", "items": ["Increased productivity and optimized labor costs."] }], "options": [{ "text": "See other FaceGenie modules", "next_id": "facegenie_features_menu" }, { "text": "Go to Main Menu", "next_id": "start" }] },
  "facegenie_feature_box": { "response": [{ "type": "text", "content": "Volumetric Box Analysis: FaceGenie accurately measures the dimensions of packages in real time, ensuring proper space utilization in warehouses, shipping, and logistics." }, { "type": "list", "title": "Industries:", "items": ["Logistics, Warehousing & Transportation", "FMCG", "Consumer Product & Electronic Goods"] }, { "type": "list", "title": "Benefits:", "items": ["Precise package dimension measurement for efficient logistics", "Minimized shipping costs through optimized space utilization", "Reduced packaging errors and rework"] }, { "type": "list", "title": "Impact:", "items": ["Efficient space management and reduced shipping expenses."] }], "options": [{ "text": "See other FaceGenie modules", "next_id": "facegenie_features_menu" }, { "text": "Go to Main Menu", "next_id": "start" }] },
  "facegenie_feature_shelf": { "response": [{ "type": "text", "content": "Shelf Occupancy Analytics: FaceGenie continuously monitors retail shelves to detect product availability and gaps." }, { "type": "list", "title": "Industries:", "items": ["Retail, E-commerce & Marketplaces", "FMCG", "Consumer Product & Electronic Goods"] }, { "type": "list", "title": "Benefits:", "items": ["Real-time shelf monitoring for optimized inventory control", "Automated restocking alerts for better supply chain efficiency", "Increased sales through enhanced product availability"] }, { "type": "list", "title": "Impact:", "items": ["Increased sales, improved inventory turnover, and enhanced customer experience."] }], "options": [{ "text": "See other FaceGenie modules", "next_id": "facegenie_features_menu" }, { "text": "Go to Main Menu", "next_id": "start" }] },
  "facegenie_feature_label": { "response": [{ "type": "text", "content": "Label Print Verification: FaceGenie verifies printed labels to detect misprints, incorrect barcodes, and labeling errors before products reach customers." }, { "type": "list", "title": "Industries:", "items": ["Chemicals, Pharmaceuticals & Medical Devices", "FMCG", "Consumer Product & Electronic Goods", "Textile, Yarn & fabric"] }, { "type": "list", "title": "Benefits:", "items": ["Reduced compliance risks and regulatory penalties", "Prevention of labeling errors that affect product integrity", "Assurance of accurate barcode and product information"] }, { "type": "list", "title": "Impact:", "items": ["Enhanced brand reputation and reduced compliance risks."] }], "options": [{ "text": "See other FaceGenie modules", "next_id": "facegenie_features_menu" }, { "text": "Go to Main Menu", "next_id": "start" }] },
  "facegenie_feature_entry_exit": { "response": [{ "type": "text", "content": "Entry and Exit Movement Detection: FaceGenie tracks and records the movement of individuals and assets in various premises, improving security and operational monitoring." }, { "type": "list", "title": "Industries:", "items": ["Hospitals & Healthcare", "Hotels, QSR & Hospitality", "Educational Institutions", "Real Estate, Construction & Technology Parks"] }, { "type": "list", "title": "Benefits:", "items": ["Strengthened security with automated access monitoring", "Reduced unauthorized movement and asset loss", "Improved workforce and visitor tracking for compliance"] }, { "type": "list", "title": "Impact:", "items": ["Enhanced safety and regulatory compliance."] }], "options": [{ "text": "See other FaceGenie modules", "next_id": "facegenie_features_menu" }, { "text": "Go to Main Menu", "next_id": "start" }] },
  "facegenie_feature_efficiency": { "response": [{ "type": "text", "content": "Work Efficiency & Productivity Tracking: FaceGenie enables businesses to monitor workforce productivity by analyzing task completion times and efficiency levels." }, { "type": "list", "title": "Industries:", "items": ["Power, Energy & Industrial Automation", "Automotives, Ancillaries & Heavy Engineering", "Logistics, Warehousing & Transportation", "Textile, Yarn & Fabric", "Retail, E-commerce & Marketplaces"] }, { "type": "list", "title": "Benefits:", "items": ["Real-time tracking of workforce efficiency", "Enhanced productivity through data-driven insights", "Better decision-making for resource optimization"] }, { "type": "list", "title": "Impact:", "items": ["Higher efficiency and better resource utilization."] }], "options": [{ "text": "See other FaceGenie modules", "next_id": "facegenie_features_menu" }, { "text": "Go to Main Menu", "next_id": "start" }] },
  "facegenie_feature_parking": { "response": [{ "type": "text", "content": "Smart Parking Solution for Airports & Other Sectors: FaceGenie's AI-powered parking solution helps optimize space utilization in high-traffic areas like airports, malls, and corporate buildings." }, { "type": "list", "title": "Industries:", "items": ["Airports & Transportation Hubs", "Hotels, QSR & Hospitality", "Real Estate, Construction & Technology Parks"] }, { "type": "list", "title": "Benefits:", "items": ["Efficient parking space detection for reduced congestion", "Faster parking availability updates for improved user experience", "Optimized space utilization in large parking areas"] }, { "type": "list", "title": "Impact:", "items": ["Better user experience and improved efficiency in parking operations."] }], "options": [{ "text": "See other FaceGenie modules", "next_id": "facegenie_features_menu" }, { "text": "Go to Main Menu", "next_id": "start" }] },
  "facegenie_feature_clean_room": { "response": [{ "type": "text", "content": "Clean Room Analytics for Pharma Industry: FaceGenie monitors personnel movements, contamination risks, and compliance with hygiene protocols, ensuring a controlled environment." }, { "type": "list", "title": "Industries:", "items": ["Chemicals, Pharmaceuticals & Medical Devices", "Hospitals & Healthcare"] }, { "type": "list", "title": "Benefits:", "items": ["Automated compliance monitoring for strict regulatory adherence", "Real-time alerts for contamination risks", "Enhanced hygiene control in sensitive production areas"] }, { "type": "list", "title": "Impact:", "items": ["Improved regulatory adherence and reduced chances of contamination-related losses."] }], "options": [{ "text": "See other FaceGenie modules", "next_id": "facegenie_features_menu" }, { "text": "Go to Main Menu", "next_id": "start" }] },
  "facegenie_feature_barrel": { "response": [{ "type": "text", "content": "Barrel Verification During Oil Change: FaceGenie verifies barrel authenticity and count during oil changes, ensuring proper inventory management and preventing fraud." }, { "type": "list", "title": "Industries:", "items": ["Mining, Metals & Heavy Infrastructure", "Power, Energy & Industrial Automation"] }, { "type": "list", "title": "Benefits:", "items": ["Accurate tracking of barrels to prevent inventory discrepancies", "Improved compliance with safety and regulatory guidelines", "Reduced losses through automated verification"] }, { "type": "list", "title": "Impact:", "items": ["Reduced losses and improved operational integrity."] }], "options": [{ "text": "See other FaceGenie modules", "next_id": "facegenie_features_menu" }, { "text": "Go to Main Menu", "next_id": "start" }] },
  "facegenie_feature_access": { "response": [{ "type": "text", "content": "Face Recognition and Voice-Based Access Control: FaceGenie provides a seamless and secure access control system using AI-powered facial recognition and voice authentication." }, { "type": "list", "title": "Industries:", "items": ["Real Estate, Construction & Technology Parks", "Hospitals & Healthcare", "Educational Institutions", "Hotels, QSR & Hospitality"] }, { "type": "list", "title": "Benefits:", "items": ["Secure and frictionless entry with AI-driven authentication", "Eliminates the risk of stolen or duplicated access cards", "Enhanced compliance with access control policies"] }, { "type": "list", "title": "Impact:", "items": ["Improved operational efficiency with quick, touchless entry"] }], "options": [{ "text": "See other FaceGenie modules", "next_id": "facegenie_features_menu" }, { "text": "Go to Main Menu", "next_id": "start" }] },
  "facegenie_feature_geofence": { "response": [{ "type": "text", "content": "Geofencing and Perimeter Safety: FaceGenie enables businesses to establish virtual boundaries (geofences) and monitor perimeter security in real-time." }, { "type": "list", "title": "Industries:", "items": ["Mining, Metals & Heavy Infrastructure", "Logistics, Warehousing & Transportation", "Real Estate, Construction & Technology Parks", "Power, Energy & Industrial Automation"] }, { "type": "list", "title": "Benefits:", "items": ["Real-time perimeter security monitoring", "Instant alerts for unauthorized breaches or intrusions", "Improved compliance with safety regulations"] }, { "type": "list", "title": "Impact:", "items": ["Reduced security threats and unauthorized access incidents"] }], "options": [{ "text": "See other FaceGenie modules", "next_id": "facegenie_features_menu" }, { "text": "Go to Main Menu", "next_id": "start" }] },
  "facegenie_feature_fire": { "response": [{ "type": "text", "content": "Fire and Violence Detection: FaceGenie's AI-driven system detects fire hazards and acts of violence in real-time, enabling immediate response and minimizing damage." }, { "type": "list", "title": "Industries:", "items": ["Hospitals & Healthcare", "Hotels, QSR & Hospitality", "Educational Institutions", "Real Estate, Construction & Technology Parks"] }, { "type": "list", "title": "Benefits:", "items": ["Early detection of fire and violent incidents for proactive response", "Automated alerts to emergency personnel for faster action", "Reduced property damage and safety risks"] }, { "type": "list", "title": "Impact:", "items": ["Increased safety with reduced casualties and property loss"] }], "options": [{ "text": "See other FaceGenie modules", "next_id": "facegenie_features_menu" }, { "text": "Go to Main Menu", "next_id": "start" }] },
  "facegenie_feature_faceid": { "response": [{ "type": "text", "content": "Face ID, Name, Age, and Gender Detection: FaceGenie accurately identifies individuals and extracts key demographic details like age and gender for security and analytics purposes." }, { "type": "list", "title": "Industries:", "items": ["Retail, E-commerce & Marketplaces", "Hospitals & Healthcare", "Hotels, QSR & Hospitality", "Educational Institutions"] }, { "type": "list", "title": "Benefits:", "items": ["Enhanced security with accurate identity verification", "Improved customer experience through personalized services", "Streamlined user authentication for secure transactions"] }, { "type": "list", "title": "Impact:", "items": ["Increased engagement through data-driven personalization"] }], "options": [{ "text": "See other FaceGenie modules", "next_id": "facegenie_features_menu" }, { "text": "Go to Main Menu", "next_id": "start" }] },
  "facegenie_feature_crowd": { "response": [{ "type": "text", "content": "Crowd Detection: FaceGenie's crowd detection technology analyzes the density and movement of people in real-time." }, { "type": "list", "title": "Industries:", "items": ["Airports & Transportation Hubs", "Hotels, QSR & Hospitality", "Educational Institutions", "Retail, E-commerce & Marketplaces"] }, { "type": "list", "title": "Benefits:", "items": ["Real-time monitoring of crowd density for better space management", "Enhanced safety by preventing overcrowding", "Improved resource allocation for managing high footfall areas"] }, { "type": "list", "title": "Impact:", "items": ["Optimized staffing and crowd control measures"] }], "options": [{ "text": "See other FaceGenie modules", "next_id": "facegenie_features_menu" }, { "text": "Go to Main Menu", "next_id": "start" }] },
  "facegenie_feature_fall": { "response": [{ "type": "text", "content": "Person Fall or Trip Detection: FaceGenie uses AI to detect falls or trips in real-time, enabling quick assistance and reducing injury risks." }, { "type": "list", "title": "Industries:", "items": ["Hospitals & Healthcare", "Hotels, QSR & Hospitality", "Educational Institutions", "Real Estate, Construction & Technology Parks"] }, { "type": "list", "title": "Benefits:", "items": ["Instant fall detection and alerting for quick response", "Reduced risks for elderly and vulnerable individuals", "Enhanced workplace safety and compliance"] }, { "type": "list", "title": "Impact:", "items": ["Increased safety compliance in high-risk environments"] }], "options": [{ "text": "See other FaceGenie modules", "next_id": "facegenie_features_menu" }, { "text": "Go to Main Menu", "next_id": "start" }] },
  "facegenie_feature_drone": { "response": [{ "type": "text", "content": "Drone Video Analytics: FaceGenie integrates AI-powered analytics with drone footage to monitor large-scale operations, security, and compliance in real time." }, { "type": "list", "title": "Industries:", "items": ["Mining, Metals & Heavy Infrastructure", "Real Estate, Construction & Technology Parks", "Logistics, Warehousing & Transportation", "Power, Energy & Industrial Automation"] }, { "type": "list", "title": "Benefits:", "items": ["Aerial surveillance for enhanced security and monitoring", "Automated anomaly detection in large operational areas", "Reduced manual effort in asset tracking and inspection"] }, { "type": "list", "title": "Impact:", "items": ["Improved situational awareness with real-time analytics"] }], "options": [{ "text": "See other FaceGenie modules", "next_id": "facegenie_features_menu" }, { "text": "Go to Main Menu", "next_id": "start" }] },

  "product_analyticscart_details": {
    "response": [
      { "type": "text", "content": "AnalyticsKart is a data driven Gen AI led analytics platform offering you an in-depth advanced analysis (Descriptive, Diagnostic & Predictive) of your business data." }
    ],
    "options": [
      { "text": "See AnalyticsKart's Modules", "next_id": "analyticscart_features_menu" },
      { "text": "Visit Analytics Page", "next_id": "redirect_analytics" },
      { "text": "See other products", "next_id": "products_menu" },
      { "text": "Go to Main Menu", "next_id": "start" }
    ]
  },

  "redirect_analytics": {
    "response": [
      { "type": "text", "content": "Redirecting you to Facegenie page..." }
    ],
    "options": [],
    "redirect_url": "/analyticskart"
  },
  "analyticscart_features_menu": {
    "response": [
      { "type": "text", "content": "AnalyticsKart offers powerful data analytics modules. Which are you interested in?" }
    ],
    "options": [
      { "text": "Warehouse Management System", "next_id": "analyticscart_feature_wms" },
      { "text": "Employee Tracking System", "next_id": "analyticscart_feature_employee" },
      { "text": "Control Tower Dashboard", "next_id": "analyticscart_feature_control" },
      { "text": "Predictive Maintenance", "next_id": "analyticscart_feature_maintenance" },
      { "text": "Asset Management", "next_id": "analyticscart_feature_asset" },
      { "text": "Sentiment Analysis", "next_id": "analyticscart_feature_sentiment" },
      { "text": "Sales Prediction", "next_id": "analyticscart_feature_sales" },
      { "text": "Document Information Intelligence", "next_id": "analyticscart_feature_docintel" },
      { "text": "Commodity Price Prediction", "next_id": "analyticscart_feature_price" },
      { "text": "Recommendation Engine", "next_id": "analyticscart_feature_recommend" },
      { "text": "Back to Products", "next_id": "products_menu" }
    ]
  },
  "analyticscart_feature_wms": { "response": [{ "type": "text", "content": "Warehouse Management System: AnalyticsKart's WMS provides end-to-end automation for inventory control, order fulfillment, and warehouse operations." }, { "type": "list", "title": "Industries:", "items": ["Logistics, Warehousing & Transportation", "Retail, E-commerce & Marketplaces", "FMCG", "Automotives, Ancillaries & Heavy Engineering"] }, { "type": "list", "title": "Benefits:", "items": ["Real-time inventory tracking for improved stock accuracy", "Optimized space utilization to reduce storage costs", "Faster and error-free order processing through automation", "Seamless integration with supply chain management systems"] }, { "type": "list", "title": "Impact:", "items": ["Reduced operational costs and increased warehouse efficiency."] }], "options": [{ "text": "See other AnalyticsKart modules", "next_id": "analyticscart_features_menu" }, { "text": "Go to Main Menu", "next_id": "start" }] },
  "analyticscart_feature_employee": { "response": [{ "type": "text", "content": "Employee Tracking System (Using BLE-Lora): AnalyticsKart's Employee Tracking System leverages BLE and LoRa technology to monitor workforce movement in real-time across large facilities." }, { "type": "list", "title": "Industries:", "items": ["Mining, Metals & Heavy Infrastructure", "Power, Energy & Industrial Automation", "Hospitals & Healthcare", "Real Estate, Construction & Technology Parks"] }, { "type": "list", "title": "Benefits:", "items": ["Real-time monitoring for improved safety and security", "Enhanced workforce productivity through movement insights", "Automated attendance tracking and compliance management", "Customizable alerts for unauthorized access or inactivity"] }, { "type": "list", "title": "Impact:", "items": ["Increased workplace safety and workforce efficiency."] }], "options": [{ "text": "See other AnalyticsKart modules", "next_id": "analyticscart_features_menu" }, { "text": "Go to Main Menu", "next_id": "start" }] },
  "analyticscart_feature_control": { "response": [{ "type": "text", "content": "Control Tower – A Real-Time Centralized Dashboard: AnalyticsKart's Control Tower offers a single-window, real-time view of business operations, helping organizations gain actionable insights and improve supply chain visibility." }, { "type": "list", "title": "Industries:", "items": ["Logistics, Warehousing & Transportation", "FMCG", "Retail, E-commerce & Marketplaces", "Power, Energy & Industrial Automation"] }, { "type": "list", "title": "Benefits:", "items": ["Centralized data visualization for enhanced decision-making", "Real-time alerts for proactive issue resolution", "AI-powered analytics for predictive planning", "Seamless integration with ERP and supply chain systems"] }, { "type": "list", "title": "Impact:", "items": ["Enhanced operational agility and decision-making accuracy."] }], "options": [{ "text": "See other AnalyticsKart modules", "next_id": "analyticscart_features_menu" }, { "text": "Go to Main Menu", "next_id": "start" }] },
  "analyticscart_feature_maintenance": { "response": [{ "type": "text", "content": "Predictive Maintenance: AnalyticsKart's Predictive Maintenance module employs AI-powered analytics to detect potential failures in machinery and equipment before they occur." }, { "type": "list", "title": "Industries:", "items": ["Automotives, Ancillaries & Heavy Engineering", "Mining, Metals & Heavy Infrastructure", "Power, Energy & Industrial Automation", "Chemicals, Pharmaceuticals & Medical Devices"] }, { "type": "list", "title": "Benefits:", "items": ["Early detection of equipment issues to prevent failures", "Reduced maintenance costs through predictive servicing", "Extended equipment lifespan and improved reliability", "Increased operational efficiency with AI-driven insights"] }, { "type": "list", "title": "Impact:", "items": ["Increased equipment uptime and cost savings."] }], "options": [{ "text": "See other AnalyticsKart modules", "next_id": "analyticscart_features_menu" }, { "text": "Go to Main Menu", "next_id": "start" }] },
  "analyticscart_feature_asset": { "response": [{ "type": "text", "content": "Asset Management (Using RFID, BLE, etc.): AnalyticsKart's Asset Management solution provides real-time tracking and monitoring of valuable assets using RFID, BLE, and IoT technology." }, { "type": "list", "title": "Industries:", "items": ["Logistics, Warehousing & Transportation", "Mining, Metals & Heavy Infrastructure", "Power, Energy & Industrial Automation", "Retail, E-commerce & Marketplaces"] }, { "type": "list", "title": "Benefits:", "items": ["Automated asset tracking for improved visibility", "Enhanced security through real-time monitoring and alerts", "Optimized asset utilization for better ROI", "Reduced asset loss and unauthorized access"] }, { "type": "list", "title": "Impact:", "items": ["Reduced asset loss and improved resource efficiency."] }], "options": [{ "text": "See other AnalyticsKart modules", "next_id": "analyticscart_features_menu" }, { "text": "Go to Main Menu", "next_id": "start" }] },
  "analyticscart_feature_sentiment": { "response": [{ "type": "text", "content": "Sentiment Analysis: AnalyticsKart's Sentiment Analysis module uses advanced AI algorithms to analyze customer feedback, social media mentions, and product reviews." }, { "type": "list", "title": "Industries:", "items": ["Retail, E-commerce & Marketplaces", "FMCG", "Consumer Product & Electronic Goods", "Educational Institutions"] }, { "type": "list", "title": "Benefits:", "items": ["Real-time analysis of customer sentiments across multiple platforms", "Improved brand reputation management and crisis handling", "Personalized marketing strategies based on audience emotions", "Enhanced customer experience through actionable insights"] }, { "type": "list", "title": "Impact:", "items": ["Strengthened customer relationships and brand loyalty."] }], "options": [{ "text": "See other AnalyticsKart modules", "next_id": "analyticscart_features_menu" }, { "text": "Go to Main Menu", "next_id": "start" }] },
  "analyticscart_feature_sales": { "response": [{ "type": "text", "content": "Primary and Secondary Sales – Prediction and Forecasting: AnalyticsKart's AI-powered sales forecasting module provides precise predictions for both primary and secondary sales." }, { "type": "list", "title": "Industries:", "items": ["FMCG", "Retail, E-commerce & Marketplaces", "Consumer Product & Electronic Goods", "Logistics, Warehousing & Transportation"] }, { "type": "list", "title": "Benefits:", "items": ["AI-driven demand forecasting for improved inventory management", "Optimized supply chain planning and distribution efficiency", "Reduced wastage from overstocking and lost sales due to stockouts", "Data-driven pricing and promotion strategies"] }, { "type": "list", "title": "Impact:", "items": ["Increased sales efficiency and revenue optimization."] }], "options": [{ "text": "See other AnalyticsKart modules", "next_id": "analyticscart_features_menu" }, { "text": "Go to Main Menu", "next_id": "start" }] },
  "analyticscart_feature_docintel": { "response": [{ "type": "text", "content": "Document Information Intelligence: AnalyticsKart's Document Information Intelligence module automated document processing by extracting key data from invoices, purchase orders, and compliance forms." }, { "type": "list", "title": "Industries:", "items": ["Chemicals, Pharmaceuticals & Medical Devices", "Hospitals & Healthcare", "Logistics, Warehousing & Transportation", "Educational Institutions", "FMCG"] }, { "type": "list", "title": "Benefits:", "items": ["AI-powered automation for error-free document processing", "Faster decision-making through instant data extraction", "Compliance assurance with built-in regulatory checks", "Seamless integration with ERP and workflow systems"] }, { "type": "list", "title": "Impact:", "items": ["Faster processing times and improved data accuracy."] }], "options": [{ "text": "See other AnalyticsKart modules", "next_id": "analyticscart_features_menu" }, { "text": "Go to Main Menu", "next_id": "start" }] },
  "analyticscart_feature_price": { "response": [{ "type": "text", "content": "Commodity Price Prediction: AnalyticsKart's Commodity Price Prediction module leverages AI to forecast fluctuations in commodity prices based on historical trends, demand-supply metrics, and economic indicators." }, { "type": "list", "title": "Industries:", "items": ["FMCG", "Retail, E-commerce & Marketplaces", "Power, Energy & Industrial Automation", "Chemicals, Pharmaceuticals & Medical Devices"] }, { "type": "list", "title": "Benefits:", "items": ["AI-driven price predictions for better financial planning", "Reduced risks of market fluctuations and price shocks", "Optimized procurement decisions based on accurate forecasts", "Competitive advantage through strategic pricing"] }, { "type": "list", "title": "Impact:", "items": ["Improved profitability with strategic pricing and procurement."] }], "options": [{ "text": "See other AnalyticsKart modules", "next_id": "analyticscart_features_menu" }, { "text": "Go to Main Menu", "next_id": "start" }] },
  "analyticscart_feature_recommend": { "response": [{ "type": "text", "content": "Recommendation Engine: AnalyticsKart's Recommendation Engine personalised user experiences by suggesting relevant products, content, or services based on browsing behavior, purchase history, and preferences." }, { "type": "list", "title": "Industries:", "items": ["Retail, E-commerce & Marketplaces", "Consumer Product & Electronic Goods", "Hotels, QSR & Hospitality", "Educational Institutions"] }, { "type": "list", "title": "Benefits:", "items": ["AI-driven personalized recommendations for improved engagement", "Increased sales and revenue through higher conversion rates", "Enhanced customer satisfaction with tailored content and offers", "Scalable solution for large datasets and dynamic product catalogs"] }, { "type": "list", "title": "Impact:", "items": ["Boosted customer satisfaction and sales growth."] }], "options": [{ "text": "See other AnalyticsKart modules", "next_id": "analyticscart_features_menu" }, { "text": "Go to Main Menu", "next_id": "start" }] },

  "services_menu": {
    "response": [
      { "type": "text", "content": "We offer a range of AI Engineering Solutions & Services. Which would you like to know more about?" }
    ],
    "options": [
      { "text": "Visit Page", "next_id": "redirect_solutions" },
      { "text": "Permit to Work Automation", "next_id": "service_permit_work" },
      { "text": "EHS Digitalization", "next_id": "service_ehs" },
      { "text": "Digital Logbook", "next_id": "service_logbook" },
      { "text": "Data Lake Management", "next_id": "service_datalake" },
      { "text": "Cloud Engineering Services", "next_id": "service_cloud" },
      { "text": "Android/iOS App Development", "next_id": "service_mobile_dev" },
      { "text": "Flutter App Development", "next_id": "service_flutter_dev" },
      { "text": "AI Trainings", "next_id": "service_ai_training" },
      { "text": "Go to Main Menu", "next_id": "start" }
    ]
  },

  "redirect_solutions": {
    "response": [
      { "type": "text", "content": "Redirecting you to Solutions & Services  page..." }
    ],
    "options": [],
    "redirect_url": "/solutions-and-services/0"
  },
  "service_permit_work": { "response": [{ "type": "text", "content": "Permit to Work Automation: Our AI-led Permit to Work Automation streamlines the process of managing work permits, ensuring compliance and safety across industrial and operational environments." }, { "type": "list", "title": "Benefits:", "items": ["AI-driven automation of permit requests and approvals", "Real-time compliance monitoring and alerts", "Seamless integration with safety and operational systems"] }, { "type": "list", "title": "Impact:", "items": ["30% faster permit processing and approvals", "Enhanced safety compliance and reduced human error"] }], "options": [{ "text": "See other services", "next_id": "services_menu" }, { "text": "Go to Main Menu", "next_id": "start" }] },
  "service_ehs": { "response": [{ "type": "text", "content": "EHS (Environment, Health, and Safety) Digitalization: Our EHS Digitalization solution leverages AI to automate safety inspections, incident reporting, and compliance tracking." }, { "type": "list", "title": "Benefits:", "items": ["AI-powered incident detection and reporting", "Automated safety inspections and compliance checks", "Real-time alerts and corrective action recommendations"] }, { "type": "list", "title": "Impact:", "items": ["40% reduction in safety incidents", "Improved compliance and safety culture"] }], "options": [{ "text": "See other services", "next_id": "services_menu" }, { "text": "Go to Main Menu", "next_id": "start" }] },
  "service_logbook": { "response": [{ "type": "text", "content": "Digital Logbook: Our Digital Logbook replaces traditional paper-based logbooks with an AI-enabled digital platform. It captures operational data, maintenance records, and shift handovers in real time." }, { "type": "list", "title": "Benefits:", "items": ["AI-led data logging and analysis", "Real-time operational insights", "Secure and searchable data repository"] }, { "type": "list", "title": "Impact:", "items": ["35% faster data retrieval and record-keeping", "Improved operational transparency and accountability"] }], "options": [{ "text": "See other services", "next_id": "services_menu" }, { "text": "Go to Main Menu", "next_id": "start" }] },
  "service_datalake": { "response": [{ "type": "text", "content": "Data Lake Management: Our Data Lake Management solution organizes and manages large volumes of structured and unstructured data using AI and machine learning." }, { "type": "list", "title": "Benefits:", "items": ["AI-based data classification and indexing", "Automated data ingestion and cleansing", "Real-time data access and insights"] }, { "type": "list", "title": "Impact:", "items": ["50% improvement in data processing speed", "Enhanced data accuracy and availability"] }], "options": [{ "text": "See other services", "next_id": "services_menu" }, { "text": "Go to Main Menu", "next_id": "start" }] },
  "service_cloud": { "response": [{ "type": "text", "content": "Cloud Engineering Services: Our Cloud Engineering Services provide end-to-end cloud infrastructure management, including deployment, monitoring, and optimization." }, { "type": "list", "title": "Benefits:", "items": ["AI-led cloud resource allocation and scaling", "Real-time monitoring and anomaly detection", "Enhanced data security and compliance"] }, { "type": "list", "title": "Impact:", "items": ["40% reduction in cloud infrastructure costs", "Improved application performance and uptime"] }], "options": [{ "text": "See other services", "next_id": "services_menu" }, { "text": "Go to Main Menu", "next_id": "start" }] },
  "service_mobile_dev": { "response": [{ "type": "text", "content": "Android/iOS Application Development: Our AI-enabled Android and iOS application development services deliver user-centric mobile apps with advanced features like real-time data processing, personalized recommendations, and seamless user experience." }, { "type": "list", "title": "Benefits:", "items": ["AI-driven user behavior analysis and personalization", "High-performance, secure app architecture", "Cross-platform compatibility"] }, { "type": "list", "title": "Impact:", "items": ["30% faster app development cycle", "Increased user engagement and retention"] }], "options": [{ "text": "See other services", "next_id": "services_menu" }, { "text": "Go to Main Menu", "next_id": "start" }] },
  "service_flutter_dev": { "response": [{ "type": "text", "content": "Flutter-based Application Development: Our Flutter-based application development leverages AI to create high-performance, cross-platform apps from a single codebase." }, { "type": "list", "title": "Benefits:", "items": ["AI-powered user interface optimization", "Single codebase for Android and iOS", "Faster updates and reduced development time"] }, { "type": "list", "title": "Impact:", "items": ["Improved app performance and user satisfaction"] }], "options": [{ "text": "See other services", "next_id": "services_menu" }, { "text": "Go to Main Menu", "next_id": "start" }] },
  "service_ai_training": { "response": [{ "type": "text", "content": "AI Trainings: Our AI Training programs equip businesses and teams with the knowledge and skills needed to implement and scale AI-driven solutions." }, { "type": "list", "title": "Benefits:", "items": ["Customized AI training for business-specific use cases", "Hands-on workshops and real-world simulations", "Expert-led sessions with industry best practices"] }, { "type": "list", "title": "Impact:", "items": ["30% faster AI adoption and implementation", "Improved team capability and business performance"] }], "options": [{ "text": "See other services", "next_id": "services_menu" }, { "text": "Go to Main Menu", "next_id": "start" }] },

  "verticals_menu": {
    "response": [
      { "type": "text", "content": "We provide tailored AI solutions across a wide range of industries. Please select one to see how we can help." }
    ],
    "options": [
      { "text": "Visit  Page", "next_id": "redirect_verticals" },
      { "text": "Textile", "next_id": "vertical_textile" },
      { "text": "FMCG", "next_id": "vertical_fmcg" },
      { "text": "Retail, E-commerce & Marketplaces", "next_id": "vertical_retail" },
      { "text": "Chemicals & Pharmaceuticals", "next_id": "vertical_pharma" },
      { "text": "Consumer, Electronics & Medical Devices", "next_id": "vertical_consumer" },
      { "text": "Power, Energy, Oil & Gas", "next_id": "vertical_energy" },
      { "text": "Real Estate & Heavy Infrastructure", "next_id": "vertical_infra" },
      { "text": "Mining, Metals & Industrial Automation", "next_id": "vertical_mining" },
      { "text": "Automotives & Heavy Machinery", "next_id": "vertical_auto" },
      { "text": "Logistics & Transportation", "next_id": "vertical_logistics" },
      { "text": "Healthcare, Lifesciences, Hospitality", "next_id": "vertical_healthcare" },
      { "text": "BFSI", "next_id": "vertical_bfsi" },
      { "text": "Educational Institutes", "next_id": "vertical_education" },
      { "text": "Telecom, Media & Entertainment", "next_id": "vertical_media" },
      { "text": "Go to Main Menu", "next_id": "start" }
    ]
  },
  "redirect_verticals": {
    "response": [
      { "type": "text", "content": "Redirecting you to Verticals page..." }
    ],
    "options": [],
    "redirect_url": "/our-verticals/0"
  },
  "vertical_textile": {
    "response": [
      { "type": "text", "content": "We provide tailored AI solutions across a wide range of industries. Please select one to see how we can help." }
    ],
    "options": [

      { "text": "Defect Detection & Counting on High-Speed Conveyors", "next_id": "vertical_textile1" },
      { "text": "Label Print Verification", "next_id": "vertical_textile2" },
      { "text": "Work Efficiency & Productivity Tracking", "next_id": "vertical_textile3" },
      { "text": "Permit to Work Automation", "next_id": "vertical_textile4" },
      { "text": "EHS Digitalization", "next_id": "vertical_textile5" },
      { "text": "Digital Logbook", "next_id": "vertical_textile6" },
      { "text": "Data Lake Management", "next_id": "vertical_textile7" },
      { "text": "Cloud Engineering Services", "next_id": "vertical_textile8" },
      { "text": "Flutter based Application Development", "next_id": "vertical_textile9" },
      { "text": "Android/iOS Application Development", "next_id": "vertical_textile10" },
      { "text": "AI Trainings", "next_id": "vertical_textile11" },
      { "text": "Tech Support & AMC", "next_id": "vertical_textile12" },

      { "text": "See Other Verticals", "next_id": "verticals_menu" },
      { "text": "Go to Main Menu", "next_id": "start" }

    ]
  },

  "vertical_textile1": {
    "response": [
      { "type": "text", "content": "FaceGenie’s AI- powered system detects defects and counts products moving at high speeds on conveyor belts.This ensures quality control by identifying faulty items in real time, preventing defective products from reaching customers." },
      {
        "type": "list", "title": "Impactful Benefits:", "items": ["Automated quality checks for defect-free products",
          "Reduced waste and rework costs",
          "Improved production efficiency with minimal manual intervention",]
      }],
    "options": [{ "text": "See other industries", "next_id": "verticals_menu" }, { "text": "Go to Main Menu", "next_id": "start" },
    ],

  },
  "vertical_textile2": {
    "response": [
      {
        "type": "text",
        "content": "Ensuring accurate labeling is crucial for compliance and branding. FaceGenie's AI system verifies printed labels to detect misprints, incorrect barcodes, and labeling errors in real-time before products reach customers."
      },
      {
        "type": "list",
        "title": "Impactful Benefits:",
        "items": [
          "Reduced compliance risks and regulatory penalties",
          "Prevention of labeling errors that affect product integrity",
          "Assurance of accurate barcode and product information",
          "Enhanced brand reputation and reduced compliance risks"
        ]
      }
    ],
    "options": [
      { "text": "See other industries", "next_id": "verticals_menu" },
      { "text": "Go to Main Menu", "next_id": "start" }
    ]
  },

  "vertical_textile3": {
    "response": [
      {
        "type": "text",
        "content": "FaceGenie enables businesses to monitor workforce productivity by analyzing task completion times and efficiency levels. It helps in performance evaluation and optimizing workforce allocation."
      },
      {
        "type": "list",
        "title": "Impactful Benefits:",
        "items": [
          "Real-time tracking of workforce efficiency",
          "Enhanced productivity through data-driven insights",
          "Better decision-making for resource optimization",
          "Higher efficiency and better resource utilization"
        ]
      }
    ],
    "options": [
      { "text": "See other industries", "next_id": "verticals_menu" },
      { "text": "Go to Main Menu", "next_id": "start" }
    ]
  },
  "vertical_textile4": {
    "response": [
      {
        "type": "text",
        "content": "Our AI-led Permit to Work Automation streamlines the process of managing work permits, ensuring compliance and safety across industrial and operational environments. The system automates permit creation, tracking, and approvals while integrating with existing systems."
      },
      {
        "type": "list",
        "title": "Impactful Benefits:",
        "items": [
          "AI-driven automation of permit requests and approvals",
          "Real-time compliance monitoring and alerts",
          "Seamless integration with safety and operational systems",
          "30% faster permit processing and approvals",
          "Enhanced safety compliance and reduced human error"
        ]
      }
    ],
    "options": [
      { "text": "See other industries", "next_id": "verticals_menu" },
      { "text": "Go to Main Menu", "next_id": "start" }
    ]
  },
  "vertical_textile5": {
    "response": [
      {
        "type": "text",
        "content": "Our EHS Digitalization solution leverages AI to automate safety inspections, incident reporting, and compliance tracking. The platform provides real-time insights into safety metrics, ensuring proactive risk mitigation and improving workplace safety standards."
      },
      {
        "type": "list",
        "title": "Impactful Benefits:",
        "items": [
          "AI-powered incident detection and reporting",
          "Automated safety inspections and compliance checks",
          "Real-time alerts and corrective action recommendations",
          "40% reduction in safety incidents",
          "Improved compliance and safety culture"
        ]
      }
    ],
    "options": [
      { "text": "See other industries", "next_id": "verticals_menu" },
      { "text": "Go to Main Menu", "next_id": "start" }
    ]
  },
  "vertical_textile6": {
    "response": [
      {
        "type": "text",
        "content": "Our Digital Logbook replaces traditional paper-based logbooks with an AI-enabled digital platform. It captures operational data, maintenance records, and shift handovers in real time, ensuring accurate and secure data storage and retrieval."
      },
      {
        "type": "list",
        "title": "Impactful Benefits:",
        "items": [
          "AI-led data logging and analysis",
          "Real-time operational insights",
          "Secure and searchable data repository",
          "35% faster data retrieval and record-keeping",
          "Improved operational transparency and accountability"
        ]
      }
    ],
    "options": [
      { "text": "See other industries", "next_id": "verticals_menu" },
      { "text": "Go to Main Menu", "next_id": "start" }
    ]
  },
  "vertical_textile7": {
    "response": [
      {
        "type": "text",
        "content": "Our Data Lake Management solution organizes and manages large volumes of structured and unstructured data using AI and machine learning. It automates data ingestion, classification, and retrieval, providing actionable insights and enhancing data-driven decision-making."
      },
      {
        "type": "list",
        "title": "Impactful Benefits:",
        "items": [
          "AI-based data classification and indexing",
          "Automated data ingestion and cleansing",
          "Real-time data access and insights",
          "50% improvement in data processing speed",
          "Enhanced data accuracy and availability"
        ]
      }
    ],
    "options": [
      { "text": "See other industries", "next_id": "verticals_menu" },
      { "text": "Go to Main Menu", "next_id": "start" }
    ]
  },
  "vertical_textile8": {
    "response": [
      {
        "type": "text",
        "content": "Our Cloud Engineering Services provide end-to-end cloud infrastructure management, including deployment, monitoring, and optimization. AI-driven automation ensures scalability, security, and high availability of cloud-based applications."
      },
      {
        "type": "list",
        "title": "Impactful Benefits:",
        "items": [
          "AI-led cloud resource allocation and scaling",
          "Real-time monitoring and anomaly detection",
          "Enhanced data security and compliance",
          "40% reduction in cloud infrastructure costs",
          "Improved application performance and uptime"
        ]
      }
    ],
    "options": [
      { "text": "See other industries", "next_id": "verticals_menu" },
      { "text": "Go to Main Menu", "next_id": "start" }
    ]
  },
  "vertical_textile9": {
    "response": [
      {
        "type": "text",
        "content": "Our Flutter-based application development leverages AI to create high-performance, cross-platform apps from a single codebase. The platform ensures consistent UI/UX, rapid deployment, and real-time feature updates."
      },
      {
        "type": "list",
        "title": "Impactful Benefits:",
        "items": [
          "AI-powered user interface optimization",
          "Single codebase for Android and iOS",
          "Faster updates and reduced development time",
          "Improved app performance and user satisfaction"
        ]
      }
    ],
    "options": [
      { "text": "See other industries", "next_id": "verticals_menu" },
      { "text": "Go to Main Menu", "next_id": "start" }
    ]
  },
  "vertical_textile10": {
    "response": [
      {
        "type": "text",
        "content": "Our AI-enabled Android and iOS application development services deliver user-centric mobile apps with advanced features like real-time data processing, personalized recommendations, and seamless user experience."
      },
      {
        "type": "list",
        "title": "Impactful Benefits:",
        "items": [
          "AI-driven user behavior analysis and personalization",
          "High-performance, secure app architecture",
          "Cross-platform compatibility",
          "30% faster app development cycle",
          "Increased user engagement and retention"
        ]
      }
    ],
    "options": [
      { "text": "See other industries", "next_id": "verticals_menu" },
      { "text": "Go to Main Menu", "next_id": "start" }
    ]
  },
  "vertical_textile11": {
    "response": [
      {
        "type": "text",
        "content": "Our AI Training programs equip businesses and teams with the knowledge and skills needed to implement and scale AI-driven solutions. The training covers AI model development, deployment, and performance optimization across industries."
      },
      {
        "type": "list",
        "title": "Impactful Benefits:",
        "items": [
          "Customized AI training for business-specific use cases",
          "Hands-on workshops and real-world simulations",
          "Expert-led sessions with industry best practices",
          "30% faster AI adoption and implementation",
          "Improved team capability and business performance"
        ]
      }
    ],
    "options": [
      { "text": "See other industries", "next_id": "verticals_menu" },
      { "text": "Go to Main Menu", "next_id": "start" }
    ]
  },
  "vertical_textile12": {
    "response": [
      {
        "type": "text",
        "content": "Our Tech Support & AMC services ensure the smooth functioning and long-term performance of your deployed systems, platforms, and infrastructure. From proactive maintenance to rapid issue resolution, our expert team provides round-the-clock support."
      },

    ],
    "options": [
      { "text": "See other industries", "next_id": "verticals_menu" },
      { "text": "Go to Main Menu", "next_id": "start" }
    ]
  },

  "vertical_andriod": {
    "response": [
      {
        "type": "text",
        "content": "FaceGenie’s mobile-based item counting solution enables users to scan and count objects with precision using Android and iOS devices. This eliminates the need for manual counting, reducing human error and improving efficiency. The app is user-friendly and seamlessly integrates with existing inventory and tracking systems."
      },
      {
        "type": "list",
        "title": "Impactful Benefits:",
        "items": [
          "Faster and more reliable item counting",
          "Reduced dependency on manual labor",
          "Easy mobile accessibility for real-time tracking",
          "Improved operational accuracy and significant time savings in inventory management"
        ]
      }
    ],
    "options": [
      {
        "text": "See other industries",
        "next_id": "verticals_menu"
      },
      {
        "text": "Go to Main Menu",
        "next_id": "start"
      }
    ]
  },

  "vertical_rstore": {
    "response": [
      {
        "type": "text",
        "content": "FaceGenie leverages advanced video analytics to monitor customer behavior, footfall patterns, staff interactions and many more in real time. This empowers retail businesses to make data-driven decisions that enhance store layout, improve customer engagement, and boost overall sales performance."
      },
      {
        "type": "list",
        "title": "Impactful Benefits:",
        "items": [
          "Optimized store layout based on heatmaps and dwell time",
          "Improved customer service through staff allocation analytics",
          "Real-time insights into peak hours and footfall trends",
          "Increased sales conversion and customer satisfaction through data-backed retail strategy"
        ]
      }
    ],
    "options": [
      {
        "text": "See other industries",
        "next_id": "verticals_menu"
      },
      {
        "text": "Go to Main Menu",
        "next_id": "start"
      }
    ]
  },
  "vertical_rshelf": {
    "response": [
      {
        "type": "text",
        "content": "FaceGenie continuously monitors retail shelves to detect product availability and gaps. This helps retailers manage inventory effectively and prevent stockouts, ensuring products are always available for customers."
      },
      {
        "type": "list",
        "title": "Impactful Benefits:",
        "items": [
          "Real-time shelf monitoring for optimized inventory control",
          "Automated restocking alerts for better supply chain efficiency",
          "Increased sales through enhanced product availability",
          "Increased sales, improved inventory turnover, and enhanced customer experience"
        ]
      }
    ],
    "options": [
      {
        "text": "See other industries",
        "next_id": "verticals_menu"
      },
      {
        "text": "Go to Main Menu",
        "next_id": "start"
      }
    ]
  },

  "vertical_rfai": {
    "response": [
      {
        "type": "text",
        "content": "FaceGenie accurately identifies individuals and extracts key demographic details like age and gender for security and analytics purposes. This feature enhances identity verification and customer insights in various industries."
      },
      {
        "type": "list",
        "title": "Impactful Benefits:",
        "items": [
          "Enhanced security with accurate identity verification",
          "Improved customer experience through personalized services",
          "Streamlined user authentication for secure transactions",
          "Increased engagement through data-driven personalization"
        ]
      }
    ],
    "options": [
      {
        "text": "See other industries",
        "next_id": "verticals_menu"
      },
      {
        "text": "Go to Main Menu",
        "next_id": "start"
      }
    ]
  },

  "vertical_rcrowd": {
    "response": [
      {
        "type": "text",
        "content": "FaceGenie’s crowd detection technology analyzes the density and movement of people in real-time. It helps manage crowd control, prevent congestion, and ensure safety in public spaces and commercial establishments."
      },
      {
        "type": "list",
        "title": "Impactful Benefits:",
        "items": [
          "Real-time monitoring of crowd density for better space management",
          "Enhanced safety by preventing overcrowding",
          "Improved resource allocation for managing high footfall areas",
          "Optimized staffing and crowd control measures"
        ]
      }
    ],
    "options": [
      {
        "text": "See other industries",
        "next_id": "verticals_menu"
      },
      {
        "text": "Go to Main Menu",
        "next_id": "start"
      }
    ]
  },
  "vertical_rware": {
    "response": [
      {
        "type": "text",
        "content": "AnalyticsKart’s Warehouse Management System (WMS) provides end-to-end automation for inventory control, order fulfillment, and warehouse operations. It ensures real-time inventory visibility, optimizes storage space, and improves order accuracy through AI-driven analytics. The system also supports barcode and RFID tracking, minimizing human errors and boosting productivity."
      },
      {
        "type": "list",
        "title": "Impactful Benefits:",
        "items": [
          "Real-time inventory tracking for improved stock accuracy",
          "Optimized space utilization to reduce storage costs",
          "Faster and error-free order processing through automation",
          "Seamless integration with supply chain management systems",
          "Reduced operational costs and increased warehouse efficiency"
        ]
      }
    ],
    "options": [
      {
        "text": "See other industries",
        "next_id": "verticals_menu"
      },
      {
        "text": "Go to Main Menu",
        "next_id": "start"
      }
    ]
  },

  "vertical_rcontrol": {
    "response": [
      {
        "type": "text",
        "content": "AnalyticsKart’s Control Tower offers a single-window, real-time view of business operations, helping organizations gain actionable insights and improve supply chain visibility. It consolidates data from various sources, detects anomalies, and provides predictive analytics to enhance decision-making. The system is ideal for businesses looking to optimize logistics, production, and resource allocation."
      },
      {
        "type": "list",
        "title": "Impactful Benefits:",
        "items": [
          "Centralized data visualization for enhanced decision-making",
          "Real-time alerts for proactive issue resolution",
          "AI-powered analytics for predictive planning",
          "Seamless integration with ERP and supply chain systems",
          "Enhanced operational agility and decision-making accuracy"
        ]
      }
    ],
    "options": [
      {
        "text": "See other industries",
        "next_id": "verticals_menu"
      },
      {
        "text": "Go to Main Menu",
        "next_id": "start"
      }
    ]
  },

  "vertical_rasset": {
    "response": [
      {
        "type": "text",
        "content": "AnalyticsKart’s Asset Management solution provides real-time tracking and monitoring of valuable assets using RFID, BLE, and IoT technology. It helps organizations prevent asset loss, optimize asset utilization, and improve operational efficiency. The system enables automated asset tagging, real-time location tracking, and predictive analytics for asset lifecycle management."
      },
      {
        "type": "list",
        "title": "Impactful Benefits:",
        "items": [
          "Automated asset tracking for improved visibility",
          "Enhanced security through real-time monitoring and alerts",
          "Optimized asset utilization for better ROI",
          "Reduced asset loss and unauthorized access",
          "Reduced asset loss and improved resource efficiency"
        ]
      }
    ],
    "options": [
      {
        "text": "See other industries",
        "next_id": "verticals_menu"
      },
      {
        "text": "Go to Main Menu",
        "next_id": "start"
      }
    ]
  },

  "vertical_rsentiment": {
    "response": [
      {
        "type": "text",
        "content": "AnalyticsKart’s Sentiment Analysis module uses advanced AI algorithms to analyze customer feedback, social media mentions, and product reviews. It provides businesses with deep insights into customer satisfaction, brand perception, and emerging trends. This helps brands enhance customer experience, manage their reputation, and tailor marketing strategies effectively."
      },
      {
        "type": "list",
        "title": "Impactful Benefits:",
        "items": [
          "Real-time analysis of customer sentiments across multiple platforms",
          "Improved brand reputation management and crisis handling",
          "Personalized marketing strategies based on audience emotions",
          "Enhanced customer experience through actionable insights",
          "Strengthened customer relationships and brand loyalty"
        ]
      }
    ],
    "options": [
      {
        "text": "See other industries",
        "next_id": "verticals_menu"
      },
      {
        "text": "Go to Main Menu",
        "next_id": "start"
      }
    ]
  },

  "vertical_rprimary": {
    "response": [
      {
        "type": "text",
        "content": "AnalyticsKart’s AI-powered sales forecasting module provides precise predictions for both primary and secondary sales. It enables businesses to optimize inventory levels, streamline distribution, and refine their pricing strategies. By leveraging historical data, external market trends, and demand patterns, this module minimizes stockouts and overstocking, ensuring efficient supply chain management."
      },
      {
        "type": "list",
        "title": "Impactful Benefits:",
        "items": [
          "AI-driven demand forecasting for improved inventory management",
          "Optimized supply chain planning and distribution efficiency",
          "Reduced wastage from overstocking and lost sales due to stockouts",
          "Data-driven pricing and promotion strategies",
          "Increased sales efficiency and revenue optimization"
        ]
      }
    ],
    "options": [
      {
        "text": "See other industries",
        "next_id": "verticals_menu"
      },
      {
        "text": "Go to Main Menu",
        "next_id": "start"
      }
    ]
  },

  "vertical_rcps": {
    "response": [
      {
        "type": "text",
        "content": "AnalyticsKart’s Commodity Price Prediction module leverages AI to forecast fluctuations in commodity prices based on historical trends, demand-supply metrics, and economic indicators. This enables businesses to make informed procurement, investment, and pricing decisions, minimizing risks associated with volatile markets."
      },
      {
        "type": "list",
        "title": "Impactful Benefits:",
        "items": [
          "AI-driven price predictions for better financial planning",
          "Reduced risks of market fluctuations and price shocks",
          "Optimized procurement decisions based on accurate forecasts",
          "Competitive advantage through strategic pricing",
          "Improved profitability with strategic pricing and procurement"
        ]
      }
    ],
    "options": [
      {
        "text": "See other industries",
        "next_id": "verticals_menu"
      },
      {
        "text": "Go to Main Menu",
        "next_id": "start"
      }
    ]
  },

  "vertical_rren": {
    "response": [
      {
        "type": "text",
        "content": "AnalyticsKart’s Recommendation Engine personalizes user experiences by suggesting relevant products, content, or services based on browsing behavior, purchase history, and preferences. This module enhances customer engagement, boosts conversions, and increases customer retention rates."
      },
      {
        "type": "list",
        "title": "Impactful Benefits:",
        "items": [
          "AI-driven personalized recommendations for improved engagement",
          "Increased sales and revenue through higher conversion rates",
          "Enhanced customer satisfaction with tailored content and offers",
          "Scalable solution for large datasets and dynamic product catalogs",
          "Boosted customer satisfaction and sales growth"
        ]
      }
    ],
    "options": [
      {
        "text": "See other industries",
        "next_id": "verticals_menu"
      },
      {
        "text": "Go to Main Menu",
        "next_id": "start"
      }
    ]
  },

  "vertical_rvolme": {
    "response": [
      {
        "type": "text",
        "content": "FaceGenie accurately measures the dimensions of packages in real time, ensuring proper space utilization in warehouses, shipping, and logistics. This helps businesses optimize packaging strategies and reduce transportation costs."
      },
      {
        "type": "list",
        "title": "Impactful Benefits:",
        "items": [
          "Precise package dimension measurement for efficient logistics",
          "Minimized shipping costs through optimized space utilization",
          "Reduced packaging errors and rework",
          "Efficient space management and reduced shipping expenses"
        ]
      }
    ],
    "options": [
      {
        "text": "See other industries",
        "next_id": "verticals_menu"
      },
      {
        "text": "Go to Main Menu",
        "next_id": "start"
      }
    ]
  },

  "vertical_rdoc": {
    "response": [
      {
        "type": "text",
        "content": "AnalyticsKart’s Document Information Intelligence module automates document processing by extracting key data from invoices, purchase orders, and compliance forms. Using GenAI and OCR technology, it eliminates manual data entry, enhances accuracy, and speeds up decision-making. It is particularly beneficial for industries dealing with large volumes of documentation."
      },
      {
        "type": "list",
        "title": "Impactful Benefits:",
        "items": [
          "AI-powered automation for error-free document processing",
          "Faster decision-making through instant data extraction",
          "Compliance assurance with built-in regulatory checks",
          "Seamless integration with ERP and workflow systems",
          "Faster processing times and improved data accuracy"
        ]
      }
    ],
    "options": [
      {
        "text": "See other industries",
        "next_id": "verticals_menu"
      },
      {
        "text": "Go to Main Menu",
        "next_id": "start"
      }
    ]
  },



  "vertical_fmcg": {
    "response": [
      { "type": "text", "content": "From personalized shopping journeys to intelligent operations, our AI and GenAI platforms empower retailers and online marketplaces to deliver unmatched customer experiences while minimizing operational inefficiencies." }
    ],
    "options": [

      { "text": "Android & iOS App for Counting Items", "next_id": "vertical_andriod" },
      { "text": "Defect Detection & Counting on High-Speed Conveyors", "next_id": "vertical_textile1" },
      { "text": "Retail Store Analytics", "next_id": "vertical_rstore" },
      { "text": "Volumetric Box Analysis", "next_id": "vertical_rvolme" },
      { "text": "Shelf Occupancy Analytics", "next_id": "vertical_rshelf" },
      { "text": "Label Print Verification", "next_id": "vertical_textile2" },
      { "text": "Warehouse Management System", "next_id": "vertical_rware" },
      { "text": "Control Tower – A Real-Time Centralized Dashboard", "next_id": "vertical_rcontrol" },
      // { "text": "Work Efficiency & Productivity Tracking", "next_id": "vertical_textile3" },
      // { "text": "Face ID, Name, Age, and Gender Detection", "next_id": "vertical_rfai" },
      // { "text": "Crowd Detection", "next_id": "vertical_rcrowd" },
      // { "text": "Asset Management (Using RFID, BLE, etc.)", "next_id": "vertical_rasset" },
      { "text": "Sentiment Analysis", "next_id": "vertical_rsentiment" },
      { "text": "Primary and Secondary Sales – Prediction and Forecasting", "next_id": "vertical_rprimary" },
      { "text": "Document Information Intelligence", "next_id": "vertical_rdoc" },
      { "text": "Commodity Price Prediction", "next_id": "vertical_rcps" },
      // { "text": "Recommendation Engine", "next_id": "vertical_rren" },
      { "text": "Permit to Work Automation", "next_id": "vertical_textile4" },
      { "text": "EHS Digitalization", "next_id": "vertical_textile5" },
      { "text": "Digital Logbook", "next_id": "vertical_textile6" },
      { "text": "Data Lake Management", "next_id": "vertical_textile7" },
      { "text": "Cloud Engineering Services", "next_id": "vertical_textile8" },
      { "text": "Flutter based Application Development", "next_id": "vertical_textile9" },
      { "text": "Android/iOS Application Development", "next_id": "vertical_textile10" },
      { "text": "AI Trainings", "next_id": "vertical_textile11" },
      { "text": "Tech Support & AMC", "next_id": "vertical_textile12" },

      { "text": "See Other Verticals", "next_id": "verticals_menu" },
      { "text": "Go to Main Menu", "next_id": "start" }

    ]
  },

  "vertical_retail": {
    "response": [
      { "type": "text", "content": "From personalized shopping journeys to intelligent operations, our AI and GenAI platforms empower retailers and online marketplaces to deliver unmatched customer experiences while minimizing operational inefficiencies." }
    ],
    "options": [

      // { "text": "Defect Detection & Counting on High-Speed Conveyors", "next_id": "vertical_textile1" },
      // { "text": "Label Print Verification", "next_id": "vertical_textile2" },
      { "text": "Android & iOS App for Counting Items", "next_id": "vertical_andriod" },
      { "text": "Retail Store Analytics", "next_id": "vertical_rstore" },
      { "text": "Shelf Occupancy Analytics", "next_id": "vertical_rshelf" },
      { "text": "Work Efficiency & Productivity Tracking", "next_id": "vertical_textile3" },
      { "text": "Face ID, Name, Age, and Gender Detection", "next_id": "vertical_rfai" },
      { "text": "Crowd Detection", "next_id": "vertical_rcrowd" },
      { "text": "Warehouse Management System", "next_id": "vertical_rware" },
      { "text": "Control Tower – A Real-Time Centralized Dashboard", "next_id": "vertical_rcontrol" },
      { "text": "Asset Management (Using RFID, BLE, etc.)", "next_id": "vertical_rasset" },
      { "text": "Sentiment Analysis", "next_id": "vertical_rsentiment" },
      { "text": "Primary and Secondary Sales – Prediction and Forecasting", "next_id": "vertical_rprimary" },
      { "text": "Commodity Price Prediction", "next_id": "vertical_rcps" },
      { "text": "Recommendation Engine", "next_id": "vertical_rren" },
      { "text": "Permit to Work Automation", "next_id": "vertical_textile4" },
      { "text": "EHS Digitalization", "next_id": "vertical_textile5" },
      { "text": "Digital Logbook", "next_id": "vertical_textile6" },
      { "text": "Data Lake Management", "next_id": "vertical_textile7" },
      { "text": "Cloud Engineering Services", "next_id": "vertical_textile8" },
      { "text": "Flutter based Application Development", "next_id": "vertical_textile9" },
      { "text": "Android/iOS Application Development", "next_id": "vertical_textile10" },
      { "text": "AI Trainings", "next_id": "vertical_textile11" },
      { "text": "Tech Support & AMC", "next_id": "vertical_textile12" },

      { "text": "See Other Verticals", "next_id": "verticals_menu" },
      { "text": "Go to Main Menu", "next_id": "start" }

    ]
  },

  "vertical_rclean": {
    "response": [
      {
        "type": "text",
        "content": "Maintaining hygiene in clean rooms is critical for pharmaceutical manufacturing. FaceGenie monitors personnel movements, contamination risks, and compliance with hygiene protocols, ensuring a controlled environment."
      },
      {
        "type": "list",
        "title": "Impactful Benefits:",
        "items": [
          "Automated compliance monitoring for strict regulatory adherence",
          "Real-time alerts for contamination risks",
          "Enhanced hygiene control in sensitive production areas",
          "Improved regulatory adherence and reduced chances of contamination-related losses"
        ]
      }
    ],
    "options": [
      {
        "text": "See other industries",
        "next_id": "verticals_menu"
      },
      {
        "text": "Go to Main Menu",
        "next_id": "start"
      }
    ]
  },

  "vertical_rpred": {
    "response": [
      {
        "type": "text",
        "content": "AnalyticsKart’s Predictive Maintenance module employs AI-powered analytics to detect potential failures in machinery and equipment before they occur. It helps businesses transition from reactive to proactive maintenance, reducing unexpected downtimes and maintenance costs. The system leverages IoT sensors, machine learning models, and historical data to forecast component wear and schedule maintenance efficiently."
      },
      {
        "type": "list",
        "title": "Impactful Benefits:",
        "items": [
          "Early detection of equipment issues to prevent failures",
          "Reduced maintenance costs through predictive servicing",
          "Extended equipment lifespan and improved reliability",
          "Increased operational efficiency with AI-driven insights",
          "Increased equipment uptime and cost savings"
        ]
      }
    ],
    "options": [
      {
        "text": "See other industries",
        "next_id": "verticals_menu"
      },
      {
        "text": "Go to Main Menu",
        "next_id": "start"
      }
    ]
  },


  "vertical_pharma": {
    "response": [
      { "type": "text", "content": "From personalized shopping journeys to intelligent operations, our AI and GenAI platforms empower retailers and online marketplaces to deliver unmatched customer experiences while minimizing operational inefficiencies." }
    ],
    "options": [

      // { "text": "Defect Detection & Counting on High-Speed Conveyors", "next_id": "vertical_textile1" },
      { "text": "Label Print Verification", "next_id": "vertical_textile2" },
      // { "text": "Android & iOS App for Counting Items", "next_id": "vertical_andriod" },
      // { "text": "Retail Store Analytics", "next_id": "vertical_rstore" },
      // { "text": "Shelf Occupancy Analytics", "next_id": "vertical_rshelf" },
      // { "text": "Work Efficiency & Productivity Tracking", "next_id": "vertical_textile3" },
      // { "text": "Face ID, Name, Age, and Gender Detection", "next_id": "vertical_rfai" },
      // { "text": "Crowd Detection", "next_id": "vertical_rcrowd" },
      // { "text": "Warehouse Management System", "next_id": "vertical_rware" },
      // { "text": "Control Tower – A Real-Time Centralized Dashboard", "next_id": "vertical_rcontrol" },
      // { "text": "Asset Management (Using RFID, BLE, etc.)", "next_id": "vertical_rasset" },
      // { "text": "Sentiment Analysis", "next_id": "vertical_rsentiment" },
      // { "text": "Primary and Secondary Sales – Prediction and Forecasting", "next_id": "vertical_rprimary" },
      { "text": "Clean Room Analytics for Pharma Industry", "next_id": "vertical_rclean" },
      { "text": "Predictive Maintenance", "next_id": "vertical_rpred" },
      { "text": "Document Information Intelligence", "next_id": "vertical_rdoc" },
      { "text": "Commodity Price Prediction", "next_id": "vertical_rcps" },
      // { "text": "Recommendation Engine", "next_id": "vertical_rren" },
      { "text": "Permit to Work Automation", "next_id": "vertical_textile4" },
      { "text": "EHS Digitalization", "next_id": "vertical_textile5" },
      { "text": "Digital Logbook", "next_id": "vertical_textile6" },
      { "text": "Data Lake Management", "next_id": "vertical_textile7" },
      { "text": "Cloud Engineering Services", "next_id": "vertical_textile8" },
      { "text": "Flutter based Application Development", "next_id": "vertical_textile9" },
      { "text": "Android/iOS Application Development", "next_id": "vertical_textile10" },
      { "text": "AI Trainings", "next_id": "vertical_textile11" },
      { "text": "Tech Support & AMC", "next_id": "vertical_textile12" },

      { "text": "See Other Verticals", "next_id": "verticals_menu" },
      { "text": "Go to Main Menu", "next_id": "start" }

    ]
  },

  "vertical_consumer": {
    "response": [
      { "type": "text", "content": "In this high-precision, fast-evolving sector, we integrate AI into design, manufacturing, and compliance workflows. With intelligent inspection, digital twins, and predictive fault detection, companies unlock both operational agility and compliance at scale." }
    ],
    "options": [

      { "text": "Defect Detection & Counting on High-Speed Conveyors", "next_id": "vertical_textile1" },
      { "text": "Volumetric Box Analysis", "next_id": "vertical_rvolme" },
      // { "text": "Android & iOS App for Counting Items", "next_id": "vertical_andriod" },
      // { "text": "Retail Store Analytics", "next_id": "vertical_rstore" },
      { "text": "Shelf Occupancy Analytics", "next_id": "vertical_rshelf" },
      { "text": "Label Print Verification", "next_id": "vertical_textile2" },
      // { "text": "Work Efficiency & Productivity Tracking", "next_id": "vertical_textile3" },
      // { "text": "Face ID, Name, Age, and Gender Detection", "next_id": "vertical_rfai" },
      // { "text": "Crowd Detection", "next_id": "vertical_rcrowd" },
      // { "text": "Warehouse Management System", "next_id": "vertical_rware" },
      // { "text": "Control Tower – A Real-Time Centralized Dashboard", "next_id": "vertical_rcontrol" },
      // { "text": "Asset Management (Using RFID, BLE, etc.)", "next_id": "vertical_rasset" },
      { "text": "Sentiment Analysis", "next_id": "vertical_rsentiment" },
      { "text": "Primary and Secondary Sales – Prediction and Forecasting", "next_id": "vertical_rprimary" },
      // { "text": "Clean Room Analytics for Pharma Industry", "next_id": "vertical_rclean" },
      // { "text": "Predictive Maintenance", "next_id": "vertical_rpred" },
      // { "text": "Document Information Intelligence", "next_id": "vertical_rdoc" },
      // { "text": "Commodity Price Prediction", "next_id": "vertical_rcps" },
      { "text": "Recommendation Engine", "next_id": "vertical_rren" },
      { "text": "Permit to Work Automation", "next_id": "vertical_textile4" },
      { "text": "EHS Digitalization", "next_id": "vertical_textile5" },
      { "text": "Digital Logbook", "next_id": "vertical_textile6" },
      { "text": "Data Lake Management", "next_id": "vertical_textile7" },
      { "text": "Cloud Engineering Services", "next_id": "vertical_textile8" },
      { "text": "Flutter based Application Development", "next_id": "vertical_textile9" },
      { "text": "Android/iOS Application Development", "next_id": "vertical_textile10" },
      { "text": "AI Trainings", "next_id": "vertical_textile11" },
      { "text": "Tech Support & AMC", "next_id": "vertical_textile12" },

      { "text": "See Other Verticals", "next_id": "verticals_menu" },
      { "text": "Go to Main Menu", "next_id": "start" }

    ]
  },


  "vertical_energy": {
    "response": [
      { "type": "text", "content": "We help energy-intensive sectors achieve safety, efficiency, and compliance through scalable AI. GenAI agents drive remote asset inspections, predictive maintenance prevents downtime, and LLMs automate risk and safety documentation across sites." }
    ],
    "options": [

      { "text": "Defect Detection & Counting on High-Speed Conveyors", "next_id": "vertical_textile1" },
      { "text": "Volumetric Box Analysis", "next_id": "vertical_rvolme" },
      // { "text": "Android & iOS App for Counting Items", "next_id": "vertical_andriod" },
      // { "text": "Retail Store Analytics", "next_id": "vertical_rstore" },
      { "text": "Shelf Occupancy Analytics", "next_id": "vertical_rshelf" },
      { "text": "Label Print Verification", "next_id": "vertical_textile2" },
      // { "text": "Work Efficiency & Productivity Tracking", "next_id": "vertical_textile3" },
      // { "text": "Face ID, Name, Age, and Gender Detection", "next_id": "vertical_rfai" },
      // { "text": "Crowd Detection", "next_id": "vertical_rcrowd" },
      // { "text": "Warehouse Management System", "next_id": "vertical_rware" },
      // { "text": "Control Tower – A Real-Time Centralized Dashboard", "next_id": "vertical_rcontrol" },
      // { "text": "Asset Management (Using RFID, BLE, etc.)", "next_id": "vertical_rasset" },
      { "text": "Sentiment Analysis", "next_id": "vertical_rsentiment" },
      { "text": "Primary and Secondary Sales – Prediction and Forecasting", "next_id": "vertical_rprimary" },
      // { "text": "Clean Room Analytics for Pharma Industry", "next_id": "vertical_rclean" },
      // { "text": "Predictive Maintenance", "next_id": "vertical_rpred" },
      // { "text": "Document Information Intelligence", "next_id": "vertical_rdoc" },
      // { "text": "Commodity Price Prediction", "next_id": "vertical_rcps" },
      { "text": "Recommendation Engine", "next_id": "vertical_rren" },
      { "text": "Permit to Work Automation", "next_id": "vertical_textile4" },
      { "text": "EHS Digitalization", "next_id": "vertical_textile5" },
      { "text": "Digital Logbook", "next_id": "vertical_textile6" },
      { "text": "Data Lake Management", "next_id": "vertical_textile7" },
      { "text": "Cloud Engineering Services", "next_id": "vertical_textile8" },
      { "text": "Flutter based Application Development", "next_id": "vertical_textile9" },
      { "text": "Android/iOS Application Development", "next_id": "vertical_textile10" },
      { "text": "AI Trainings", "next_id": "vertical_textile11" },
      { "text": "Tech Support & AMC", "next_id": "vertical_textile12" },

      { "text": "See Other Verticals", "next_id": "verticals_menu" },
      { "text": "Go to Main Menu", "next_id": "start" }

    ]
  },

  "vertical_rtime": {
    "response": [
      {
        "type": "text",
        "content": "By analyzing worker movements and task durations, FaceGenie provides valuable insights into process efficiency. It helps businesses identify inefficiencies and optimize workflows for maximum productivity."
      },
      {
        "type": "list",
        "title": "Impactful Benefits:",
        "items": [
          "Enhanced workforce management through data-driven insights",
          "Reduced idle time and improved operational efficiency",
          "Better resource allocation for optimized workflows",
          "Increased productivity and optimized labor costs"
        ]
      }
    ],
    "options": [
      {
        "text": "See other industries",
        "next_id": "verticals_menu"
      },
      {
        "text": "Go to Main Menu",
        "next_id": "start"
      }
    ]
  },

  "vertical_roilbarrel": {
    "response": [
      {
        "type": "text",
        "content": "FaceGenie verifies barrel authenticity and count during oil changes, ensuring proper inventory management and preventing fraud. This helps businesses maintain transparency and accountability in oil distribution and usage."
      },
      {
        "type": "list",
        "title": "Impactful Benefits:",
        "items": [
          "Accurate tracking of barrels to prevent inventory discrepancies",
          "Improved compliance with safety and regulatory guidelines",
          "Reduced losses through automated verification",
          "Reduced losses and improved operational integrity"
        ]
      }
    ],
    "options": [
      {
        "text": "See other industries",
        "next_id": "verticals_menu"
      },
      {
        "text": "Go to Main Menu",
        "next_id": "start"
      }
    ]
  },

  "vertical_rgeofen": {
    "response": [
      {
        "type": "text",
        "content": "FaceGenie enables businesses to establish virtual boundaries (geofences) and monitor perimeter security in real-time. The system provides instant alerts if unauthorized movement is detected, ensuring safety in high-risk areas."
      },
      {
        "type": "list",
        "title": "Impactful Benefits:",
        "items": [
          "Real-time perimeter security monitoring",
          "Instant alerts for unauthorized breaches or intrusions",
          "Improved compliance with safety regulations",
          "Reduced security threats and unauthorized access incidents"
        ]
      }
    ],
    "options": [
      {
        "text": "See other industries",
        "next_id": "verticals_menu"
      },
      {
        "text": "Go to Main Menu",
        "next_id": "start"
      }
    ]
  },
  "vertical_rdrone": {
    "response": [
      {
        "type": "text",
        "content": "FaceGenie integrates AI-powered analytics with drone footage to monitor large-scale operations, security, and compliance in real time. This enables automated surveillance, asset tracking, and incident detection from an aerial perspective."
      },
      {
        "type": "list",
        "title": "Impactful Benefits:",
        "items": [
          "Aerial surveillance for enhanced security and monitoring",
          "Automated anomaly detection in large operational areas",
          "Reduced manual effort in asset tracking and inspection",
          "Improved situational awareness with real-time analytics"
        ]
      }
    ],
    "options": [
      {
        "text": "See other industries",
        "next_id": "verticals_menu"
      },
      {
        "text": "Go to Main Menu",
        "next_id": "start"
      }
    ]
  },

  "vertical_remployee": {
    "response": [
      {
        "type": "text",
        "content": "AnalyticsKart’s Employee Tracking System leverages BLE and LoRa technology to monitor workforce movement in real-time across large facilities. It enhances workplace safety, ensures compliance with work schedules, and provides insights into employee efficiency. The system is particularly useful in high-risk environments, allowing for quick incident response and access control."
      },
      {
        "type": "list",
        "title": "Impactful Benefits:",
        "items": [
          "Real-time monitoring for improved safety and security",
          "Enhanced workforce productivity through movement insights",
          "Automated attendance tracking and compliance management",
          "Customizable alerts for unauthorized access or inactivity",
          "Increased workplace safety and workforce efficiency"
        ]
      }
    ],
    "options": [
      {
        "text": "See other industries",
        "next_id": "verticals_menu"
      },
      {
        "text": "Go to Main Menu",
        "next_id": "start"
      }
    ]
  },

  "vertical_energy": {
    "response": [
      { "type": "text", "content": "We help energy-intensive sectors achieve safety, efficiency, and compliance through scalable AI. GenAI agents drive remote asset inspections, predictive maintenance prevents downtime, and LLMs automate risk and safety documentation across sites." }
    ],
    "options": [

      // { "text": "Defect Detection & Counting on High-Speed Conveyors", "next_id": "vertical_textile1" },
      // { "text": "Volumetric Box Analysis", "next_id": "vertical_rvolme" },
      { "text": "Time & Motion Analysis", "next_id": "vertical_rtime" },
      // { "text": "Android & iOS App for Counting Items", "next_id": "vertical_andriod" },
      // { "text": "Retail Store Analytics", "next_id": "vertical_rstore" },
      // { "text": "Shelf Occupancy Analytics", "next_id": "vertical_rshelf" },
      // { "text": "Label Print Verification", "next_id": "vertical_textile2" },
      { "text": "Work Efficiency & Productivity Tracking", "next_id": "vertical_textile3" },
      // { "text": "Face ID, Name, Age, and Gender Detection", "next_id": "vertical_rfai" },
      // { "text": "Crowd Detection", "next_id": "vertical_rcrowd" },
      { "text": "Barrel Verification During Oil Change", "next_id": "vertical_roilbarrel" },
      { "text": "Geofencing and Perimeter Safety", "next_id": "vertical_rgeofen" },
      { "text": "Drone Video Analytics", "next_id": "vertical_rdrone" },
      { "text": "Employee Tracking System (Using BLE-Lora)", "next_id": "vertical_remployee" },
      // { "text": "Warehouse Management System", "next_id": "vertical_rware" },
      { "text": "Control Tower – A Real-Time Centralized Dashboard", "next_id": "vertical_rcontrol" },
      { "text": "Predictive Maintenance", "next_id": "vertical_rpred" },
      { "text": "Asset Management (Using RFID, BLE, etc.)", "next_id": "vertical_rasset" },
      // { "text": "Sentiment Analysis", "next_id": "vertical_rsentiment" },
      // { "text": "Primary and Secondary Sales – Prediction and Forecasting", "next_id": "vertical_rprimary" },
      // { "text": "Clean Room Analytics for Pharma Industry", "next_id": "vertical_rclean" },
      // { "text": "Document Information Intelligence", "next_id": "vertical_rdoc" },
      { "text": "Commodity Price Prediction", "next_id": "vertical_rcps" },
      // { "text": "Recommendation Engine", "next_id": "vertical_rren" },
      { "text": "Permit to Work Automation", "next_id": "vertical_textile4" },
      { "text": "EHS Digitalization", "next_id": "vertical_textile5" },
      { "text": "Digital Logbook", "next_id": "vertical_textile6" },
      { "text": "Data Lake Management", "next_id": "vertical_textile7" },
      { "text": "Cloud Engineering Services", "next_id": "vertical_textile8" },
      { "text": "Android/iOS Application Development", "next_id": "vertical_textile10" },
      { "text": "Flutter based Application Development", "next_id": "vertical_textile9" },
      { "text": "AI Trainings", "next_id": "vertical_textile11" },
      { "text": "Tech Support & AMC", "next_id": "vertical_textile12" },

      { "text": "See Other Verticals", "next_id": "verticals_menu" },
      { "text": "Go to Main Menu", "next_id": "start" }

    ]
  },

  "vertical_reed": {
    "response": [
      {
        "type": "text",
        "content": "FaceGenie tracks and records the movement of individuals and assets in various premises, improving security and operational monitoring. It provides real-time alerts for unauthorized access and helps businesses maintain a secure environment."
      },
      {
        "type": "list",
        "title": "Impactful Benefits:",
        "items": [
          "Strengthened security with automated access monitoring",
          "Reduced unauthorized movement and asset loss",
          "Improved workforce and visitor tracking for compliance",
          "Enhanced safety and regulatory compliance"
        ]
      }
    ],
    "options": [
      {
        "text": "See other industries",
        "next_id": "verticals_menu"
      },
      {
        "text": "Go to Main Menu",
        "next_id": "start"
      }
    ]
  },

  "vertical_rspsfao": {
    "response": [
      {
        "type": "text",
        "content": "FaceGenie’s AI-powered parking solution helps optimize space utilization in high-traffic areas like airports, malls, and corporate buildings. It detects available parking spots and provides real-time updates, reducing congestion."
      },
      {
        "type": "list",
        "title": "Impactful Benefits:",
        "items": [
          "Efficient parking space detection for reduced congestion",
          "Faster parking availability updates for improved user experience",
          "Optimized space utilization in large parking areas",
          "Better user experience and improved efficiency in parking operations"
        ]
      }
    ],
    "options": [
      {
        "text": "See other industries",
        "next_id": "verticals_menu"
      },
      {
        "text": "Go to Main Menu",
        "next_id": "start"
      }
    ]
  },

  "vertical_rfacere": {
    "response": [
      {
        "type": "text",
        "content": "FaceGenie provides a seamless and secure access control system using AI-powered facial recognition and voice authentication. It eliminates the need for traditional access methods like keycards or PINs, ensuring only authorized personnel can enter restricted areas. The system enhances security while offering a touchless and efficient user experience."
      },
      {
        "type": "list",
        "title": "Impactful Benefits:",
        "items": [
          "Secure and frictionless entry with AI-driven authentication",
          "Eliminates the risk of stolen or duplicated access cards",
          "Enhanced compliance with access control policies",
          "Improved operational efficiency with quick, touchless entry"
        ]
      }
    ],
    "options": [
      {
        "text": "See other industries",
        "next_id": "verticals_menu"
      },
      {
        "text": "Go to Main Menu",
        "next_id": "start"
      }
    ]
  },


  "vertical_rfvd": {
    "response": [
      {
        "type": "text",
        "content": "FaceGenie’s AI-driven system detects fire hazards and acts of violence in real-time, enabling immediate response and minimizing damage. The system integrates with security protocols to trigger alarms and alert emergency responders instantly."
      },
      {
        "type": "list",
        "title": "Impactful Benefits:",
        "items": [
          "Early detection of fire and violent incidents for proactive response",
          "Automated alerts to emergency personnel for faster action",
          "Reduced property damage and safety risks",
          "Increased safety with reduced casualties and property loss"
        ]
      }
    ],
    "options": [
      {
        "text": "See other industries",
        "next_id": "verticals_menu"
      },
      {
        "text": "Go to Main Menu",
        "next_id": "start"
      }
    ]
  },

  "vertical_rpersonfall": {
    "response": [
      {
        "type": "text",
        "content": "FaceGenie uses AI to detect falls or trips in real-time, enabling quick assistance and reducing injury risks. This is crucial for elderly care, hospitals, and high-risk workplaces."
      },
      {
        "type": "list",
        "title": "Impactful Benefits:",
        "items": [
          "Instant fall detection and alerting for quick response",
          "Reduced risks for elderly and vulnerable individuals",
          "Enhanced workplace safety and compliance",
          "Increased safety compliance in high-risk environments"
        ]
      }
    ],
    "options": [
      {
        "text": "See other industries",
        "next_id": "verticals_menu"
      },
      {
        "text": "Go to Main Menu",
        "next_id": "start"
      }
    ]
  },

  "vertical_infra": {
    "response": [
      { "type": "text", "content": "Our platform empowers infrastructure firms to digitally transform project execution—automating project tracking, enabling predictive resource planning, and ensuring safety at scale." }
    ],
    "options": [

      // { "text": "Defect Detection & Counting on High-Speed Conveyors", "next_id": "vertical_textile1" },
      // { "text": "Volumetric Box Analysis", "next_id": "vertical_rvolme" },
      { "text": "Time & Motion Analysis", "next_id": "vertical_rtime" },
      { "text": "Entry and Exit Movement Detection", "next_id": "vertical_reed" },
      { "text": "Smart Parking Solution for Airports & Other Sectors", "next_id": "vertical_rspsfao" },
      { "text": "Face Recognition and Voice-Based Access Control", "next_id": "vertical_rfacere" },
      // { "text": "Android & iOS App for Counting Items", "next_id": "vertical_andriod" },
      // { "text": "Retail Store Analytics", "next_id": "vertical_rstore" },
      // { "text": "Shelf Occupancy Analytics", "next_id": "vertical_rshelf" },
      // { "text": "Label Print Verification", "next_id": "vertical_textile2" },
      // { "text": "Work Efficiency & Productivity Tracking", "next_id": "vertical_textile3" },
      // { "text": "Face ID, Name, Age, and Gender Detection", "next_id": "vertical_rfai" },
      // { "text": "Crowd Detection", "next_id": "vertical_rcrowd" },
      // { "text": "Barrel Verification During Oil Change", "next_id": "vertical_roilbarrel" },
      { "text": "Geofencing and Perimeter Safety", "next_id": "vertical_rgeofen" },
      { "text": "Fire and Violence Detection", "next_id": "vertical_rfvd" },
      { "text": "Person Fall or Trip Detection", "next_id": "vertical_rpersonfall" },
      { "text": "Drone Video Analytics", "next_id": "vertical_rdrone" },
      { "text": "Employee Tracking System (Using BLE-Lora)", "next_id": "vertical_remployee" },
      // { "text": "Warehouse Management System", "next_id": "vertical_rware" },
      // { "text": "Control Tower – A Real-Time Centralized Dashboard", "next_id": "vertical_rcontrol" },
      // { "text": "Predictive Maintenance", "next_id": "vertical_rpred" },
      // { "text": "Asset Management (Using RFID, BLE, etc.)", "next_id": "vertical_rasset" },
      // { "text": "Sentiment Analysis", "next_id": "vertical_rsentiment" },
      // { "text": "Primary and Secondary Sales – Prediction and Forecasting", "next_id": "vertical_rprimary" },
      // { "text": "Clean Room Analytics for Pharma Industry", "next_id": "vertical_rclean" },
      // { "text": "Document Information Intelligence", "next_id": "vertical_rdoc" },
      // { "text": "Commodity Price Prediction", "next_id": "vertical_rcps" },
      // { "text": "Recommendation Engine", "next_id": "vertical_rren" },
      { "text": "Permit to Work Automation", "next_id": "vertical_textile4" },
      { "text": "EHS Digitalization", "next_id": "vertical_textile5" },
      { "text": "Digital Logbook", "next_id": "vertical_textile6" },
      { "text": "Data Lake Management", "next_id": "vertical_textile7" },
      { "text": "Cloud Engineering Services", "next_id": "vertical_textile8" },
      { "text": "Android/iOS Application Development", "next_id": "vertical_textile10" },
      { "text": "Flutter based Application Development", "next_id": "vertical_textile9" },
      { "text": "AI Trainings", "next_id": "vertical_textile11" },
      { "text": "Tech Support & AMC", "next_id": "vertical_textile12" },

      { "text": "See Other Verticals", "next_id": "verticals_menu" },
      { "text": "Go to Main Menu", "next_id": "start" }

    ]
  },


  "vertical_mining": {
    "response": [
      { "type": "text", "content": "Safety, scale, and uptime are everything in this sector. With AI-powered surveillance, predictive machine analytics, and autonomous agents, we help companies reduce hazards, maximize throughput, and ensure round-the-clock operational intelligence." }
    ],
    "options": [

      // { "text": "Defect Detection & Counting on High-Speed Conveyors", "next_id": "vertical_textile1" },
      // { "text": "Volumetric Box Analysis", "next_id": "vertical_rvolme" },
      // { "text": "Time & Motion Analysis", "next_id": "vertical_rtime" },
      // { "text": "Entry and Exit Movement Detection", "next_id": "vertical_reed" },
      // { "text": "Smart Parking Solution for Airports & Other Sectors", "next_id": "vertical_rspsfao" },
      // { "text": "Face Recognition and Voice-Based Access Control", "next_id": "vertical_rfacere" },
      // { "text": "Android & iOS App for Counting Items", "next_id": "vertical_andriod" },
      // { "text": "Retail Store Analytics", "next_id": "vertical_rstore" },
      // { "text": "Shelf Occupancy Analytics", "next_id": "vertical_rshelf" },
      // { "text": "Label Print Verification", "next_id": "vertical_textile2" },
      // { "text": "Work Efficiency & Productivity Tracking", "next_id": "vertical_textile3" },
      // { "text": "Face ID, Name, Age, and Gender Detection", "next_id": "vertical_rfai" },
      // { "text": "Crowd Detection", "next_id": "vertical_rcrowd" },
      { "text": "Barrel Verification During Oil Change", "next_id": "vertical_roilbarrel" },
      { "text": "Geofencing and Perimeter Safety", "next_id": "vertical_rgeofen" },
      // { "text": "Fire and Violence Detection", "next_id": "vertical_rfvd" },
      // { "text": "Person Fall or Trip Detection", "next_id": "vertical_rpersonfall" },
      { "text": "Drone Video Analytics", "next_id": "vertical_rdrone" },
      { "text": "Employee Tracking System (Using BLE-Lora)", "next_id": "vertical_remployee" },
      // { "text": "Warehouse Management System", "next_id": "vertical_rware" },
      // { "text": "Control Tower – A Real-Time Centralized Dashboard", "next_id": "vertical_rcontrol" },
      { "text": "Predictive Maintenance", "next_id": "vertical_rpred" },
      { "text": "Asset Management (Using RFID, BLE, etc.)", "next_id": "vertical_rasset" },
      // { "text": "Sentiment Analysis", "next_id": "vertical_rsentiment" },
      // { "text": "Primary and Secondary Sales – Prediction and Forecasting", "next_id": "vertical_rprimary" },
      // { "text": "Clean Room Analytics for Pharma Industry", "next_id": "vertical_rclean" },
      // { "text": "Document Information Intelligence", "next_id": "vertical_rdoc" },
      // { "text": "Commodity Price Prediction", "next_id": "vertical_rcps" },
      // { "text": "Recommendation Engine", "next_id": "vertical_rren" },
      { "text": "Permit to Work Automation", "next_id": "vertical_textile4" },
      { "text": "EHS Digitalization", "next_id": "vertical_textile5" },
      { "text": "Digital Logbook", "next_id": "vertical_textile6" },
      { "text": "Data Lake Management", "next_id": "vertical_textile7" },
      { "text": "Cloud Engineering Services", "next_id": "vertical_textile8" },
      { "text": "Android/iOS Application Development", "next_id": "vertical_textile10" },
      { "text": "Flutter based Application Development", "next_id": "vertical_textile9" },
      { "text": "AI Trainings", "next_id": "vertical_textile11" },
      { "text": "Tech Support & AMC", "next_id": "vertical_textile12" },

      { "text": "See Other Verticals", "next_id": "verticals_menu" },
      { "text": "Go to Main Menu", "next_id": "start" }

    ]
  },

  "vertical_auto": {
    "response": [
      { "type": "text", "content": "From smart factories to intelligent aftermarket services, our AI stack powers process automation, quality analytics, and supply chain agility. GenAI copilots enhance design simulations, and LLMs fast-track documentation and vendor coordination." }
    ],
    "options": [

      { "text": "Defect Detection & Counting on High-Speed Conveyors", "next_id": "vertical_textile1" },
      // { "text": "Volumetric Box Analysis", "next_id": "vertical_rvolme" },
      // { "text": "Time & Motion Analysis", "next_id": "vertical_rtime" },
      // { "text": "Entry and Exit Movement Detection", "next_id": "vertical_reed" },
      // { "text": "Smart Parking Solution for Airports & Other Sectors", "next_id": "vertical_rspsfao" },
      // { "text": "Face Recognition and Voice-Based Access Control", "next_id": "vertical_rfacere" },
      // { "text": "Android & iOS App for Counting Items", "next_id": "vertical_andriod" },
      // { "text": "Retail Store Analytics", "next_id": "vertical_rstore" },
      // { "text": "Shelf Occupancy Analytics", "next_id": "vertical_rshelf" },
      // { "text": "Label Print Verification", "next_id": "vertical_textile2" },
      { "text": "Work Efficiency & Productivity Tracking", "next_id": "vertical_textile3" },
      // { "text": "Face ID, Name, Age, and Gender Detection", "next_id": "vertical_rfai" },
      // { "text": "Crowd Detection", "next_id": "vertical_rcrowd" },
      // { "text": "Barrel Verification During Oil Change", "next_id": "vertical_roilbarrel" },
      // { "text": "Geofencing and Perimeter Safety", "next_id": "vertical_rgeofen" },
      // { "text": "Fire and Violence Detection", "next_id": "vertical_rfvd" },
      // { "text": "Person Fall or Trip Detection", "next_id": "vertical_rpersonfall" },
      // { "text": "Drone Video Analytics", "next_id": "vertical_rdrone" },
      // { "text": "Employee Tracking System (Using BLE-Lora)", "next_id": "vertical_remployee" },
      { "text": "Warehouse Management System", "next_id": "vertical_rware" },
      // { "text": "Control Tower – A Real-Time Centralized Dashboard", "next_id": "vertical_rcontrol" },
      { "text": "Predictive Maintenance", "next_id": "vertical_rpred" },
      // { "text": "Asset Management (Using RFID, BLE, etc.)", "next_id": "vertical_rasset" },
      // { "text": "Sentiment Analysis", "next_id": "vertical_rsentiment" },
      // { "text": "Primary and Secondary Sales – Prediction and Forecasting", "next_id": "vertical_rprimary" },
      // { "text": "Clean Room Analytics for Pharma Industry", "next_id": "vertical_rclean" },
      // { "text": "Document Information Intelligence", "next_id": "vertical_rdoc" },
      // { "text": "Commodity Price Prediction", "next_id": "vertical_rcps" },
      // { "text": "Recommendation Engine", "next_id": "vertical_rren" },
      { "text": "Permit to Work Automation", "next_id": "vertical_textile4" },
      { "text": "EHS Digitalization", "next_id": "vertical_textile5" },
      { "text": "Digital Logbook", "next_id": "vertical_textile6" },
      { "text": "Data Lake Management", "next_id": "vertical_textile7" },
      { "text": "Cloud Engineering Services", "next_id": "vertical_textile8" },
      { "text": "Android/iOS Application Development", "next_id": "vertical_textile10" },
      { "text": "Flutter based Application Development", "next_id": "vertical_textile9" },
      { "text": "AI Trainings", "next_id": "vertical_textile11" },
      { "text": "Tech Support & AMC", "next_id": "vertical_textile12" },

      { "text": "See Other Verticals", "next_id": "verticals_menu" },
      { "text": "Go to Main Menu", "next_id": "start" }

    ]
  },

  "vertical_logistics": {
    "response": [
      { "type": "text", "content": "Efficiency at every node is what we deliver. AI-led route planning, warehouse intelligence, and real-time analytics help logistics networks scale without chaos. LLMs automate documentation while Agentic AI handles exception management in real time." }
    ],
    "options": [

      // { "text": "Defect Detection & Counting on High-Speed Conveyors", "next_id": "vertical_textile1" },
      { "text": "Android & iOS App for Counting Items", "next_id": "vertical_andriod" },
      { "text": "Time & Motion Analysis", "next_id": "vertical_rtime" },
      { "text": "Volumetric Box Analysis", "next_id": "vertical_rvolme" },
      // { "text": "Entry and Exit Movement Detection", "next_id": "vertical_reed" },
      // { "text": "Smart Parking Solution for Airports & Other Sectors", "next_id": "vertical_rspsfao" },
      // { "text": "Face Recognition and Voice-Based Access Control", "next_id": "vertical_rfacere" },
      // { "text": "Retail Store Analytics", "next_id": "vertical_rstore" },
      // { "text": "Shelf Occupancy Analytics", "next_id": "vertical_rshelf" },
      // { "text": "Label Print Verification", "next_id": "vertical_textile2" },
      { "text": "Work Efficiency & Productivity Tracking", "next_id": "vertical_textile3" },
      // { "text": "Face ID, Name, Age, and Gender Detection", "next_id": "vertical_rfai" },
      // { "text": "Crowd Detection", "next_id": "vertical_rcrowd" },
      // { "text": "Barrel Verification During Oil Change", "next_id": "vertical_roilbarrel" },
      { "text": "Geofencing and Perimeter Safety", "next_id": "vertical_rgeofen" },
      // { "text": "Fire and Violence Detection", "next_id": "vertical_rfvd" },
      // { "text": "Person Fall or Trip Detection", "next_id": "vertical_rpersonfall" },
      { "text": "Drone Video Analytics", "next_id": "vertical_rdrone" },
      // { "text": "Employee Tracking System (Using BLE-Lora)", "next_id": "vertical_remployee" },
      { "text": "Warehouse Management System", "next_id": "vertical_rware" },
      { "text": "Control Tower – A Real-Time Centralized Dashboard", "next_id": "vertical_rcontrol" },
      // { "text": "Predictive Maintenance", "next_id": "vertical_rpred" },
      { "text": "Asset Management (Using RFID, BLE, etc.)", "next_id": "vertical_rasset" },
      // { "text": "Sentiment Analysis", "next_id": "vertical_rsentiment" },
      { "text": "Primary and Secondary Sales – Prediction and Forecasting", "next_id": "vertical_rprimary" },
      // { "text": "Clean Room Analytics for Pharma Industry", "next_id": "vertical_rclean" },
      { "text": "Document Information Intelligence", "next_id": "vertical_rdoc" },
      // { "text": "Commodity Price Prediction", "next_id": "vertical_rcps" },
      // { "text": "Recommendation Engine", "next_id": "vertical_rren" },
      { "text": "Permit to Work Automation", "next_id": "vertical_textile4" },
      { "text": "EHS Digitalization", "next_id": "vertical_textile5" },
      { "text": "Digital Logbook", "next_id": "vertical_textile6" },
      { "text": "Data Lake Management", "next_id": "vertical_textile7" },
      { "text": "Cloud Engineering Services", "next_id": "vertical_textile8" },
      { "text": "Android/iOS Application Development", "next_id": "vertical_textile10" },
      { "text": "Flutter based Application Development", "next_id": "vertical_textile9" },
      { "text": "AI Trainings", "next_id": "vertical_textile11" },
      { "text": "Tech Support & AMC", "next_id": "vertical_textile12" },

      { "text": "See Other Verticals", "next_id": "verticals_menu" },
      { "text": "Go to Main Menu", "next_id": "start" }

    ]
  },



  "vertical_healthcare": {
    "response": [
      { "type": "text", "content": "Whether hospitals or hospitality chains, delivering seamless service and safety is critical. Our GenAI and AI-led automation solutions empower staff, reduce administrative load, and improve patient and guest satisfaction through intelligent personalization and planning." }
    ],
    "options": [

      // { "text": "Defect Detection & Counting on High-Speed Conveyors", "next_id": "vertical_textile1" },
      // { "text": "Volumetric Box Analysis", "next_id": "vertical_rvolme" },
      // { "text": "Time & Motion Analysis", "next_id": "vertical_rtime" },
      { "text": "Entry and Exit Movement Detection", "next_id": "vertical_reed" },
      { "text": "Clean Room Analytics for Pharma Industry", "next_id": "vertical_rclean" },
      // { "text": "Smart Parking Solution for Airports & Other Sectors", "next_id": "vertical_rspsfao" },
      { "text": "Face Recognition and Voice-Based Access Control", "next_id": "vertical_rfacere" },
      // { "text": "Android & iOS App for Counting Items", "next_id": "vertical_andriod" },
      // { "text": "Retail Store Analytics", "next_id": "vertical_rstore" },
      // { "text": "Shelf Occupancy Analytics", "next_id": "vertical_rshelf" },
      // { "text": "Label Print Verification", "next_id": "vertical_textile2" },
      // { "text": "Work Efficiency & Productivity Tracking", "next_id": "vertical_textile3" },
      // { "text": "Crowd Detection", "next_id": "vertical_rcrowd" },
      // { "text": "Barrel Verification During Oil Change", "next_id": "vertical_roilbarrel" },
      // { "text": "Geofencing and Perimeter Safety", "next_id": "vertical_rgeofen" },
      { "text": "Fire and Violence Detection", "next_id": "vertical_rfvd" },
      { "text": "Face ID, Name, Age, and Gender Detection", "next_id": "vertical_rfai" },
      { "text": "Person Fall or Trip Detection", "next_id": "vertical_rpersonfall" },
      // { "text": "Drone Video Analytics", "next_id": "vertical_rdrone" },
      { "text": "Employee Tracking System (Using BLE-Lora)", "next_id": "vertical_remployee" },
      // { "text": "Warehouse Management System", "next_id": "vertical_rware" },
      // { "text": "Control Tower – A Real-Time Centralized Dashboard", "next_id": "vertical_rcontrol" },
      // { "text": "Predictive Maintenance", "next_id": "vertical_rpred" },
      // { "text": "Asset Management (Using RFID, BLE, etc.)", "next_id": "vertical_rasset" },
      // { "text": "Sentiment Analysis", "next_id": "vertical_rsentiment" },
      // { "text": "Primary and Secondary Sales – Prediction and Forecasting", "next_id": "vertical_rprimary" },
      { "text": "Document Information Intelligence", "next_id": "vertical_rdoc" },
      // { "text": "Commodity Price Prediction", "next_id": "vertical_rcps" },
      // { "text": "Recommendation Engine", "next_id": "vertical_rren" },
      { "text": "Permit to Work Automation", "next_id": "vertical_textile4" },
      { "text": "EHS Digitalization", "next_id": "vertical_textile5" },
      { "text": "Digital Logbook", "next_id": "vertical_textile6" },
      { "text": "Data Lake Management", "next_id": "vertical_textile7" },
      { "text": "Cloud Engineering Services", "next_id": "vertical_textile8" },
      { "text": "Android/iOS Application Development", "next_id": "vertical_textile10" },
      { "text": "Flutter based Application Development", "next_id": "vertical_textile9" },
      { "text": "AI Trainings", "next_id": "vertical_textile11" },
      { "text": "Tech Support & AMC", "next_id": "vertical_textile12" },

      { "text": "See Other Verticals", "next_id": "verticals_menu" },
      { "text": "Go to Main Menu", "next_id": "start" }

    ]
  },



  "vertical_bfsi": {
    "response": [
      { "type": "text", "content": "We help financial institutions shift from reactive to proactive. From underwriting to fraud detection, our GenAI and LLM models enable faster decisions, lower risk, and smarter client engagement across the lifecycle." }
    ],
    "options": [
      { "text": "Permit to Work Automation", "next_id": "vertical_textile4" },
      { "text": "EHS Digitalization", "next_id": "vertical_textile5" },
      { "text": "Digital Logbook", "next_id": "vertical_textile6" },
      { "text": "Data Lake Management", "next_id": "vertical_textile7" },
      { "text": "Cloud Engineering Services", "next_id": "vertical_textile8" },
      { "text": "Android/iOS Application Development", "next_id": "vertical_textile10" },
      { "text": "Flutter based Application Development", "next_id": "vertical_textile9" },
      { "text": "AI Trainings", "next_id": "vertical_textile11" },
      { "text": "Tech Support & AMC", "next_id": "vertical_textile12" },

      { "text": "See Other Verticals", "next_id": "verticals_menu" },
      { "text": "Go to Main Menu", "next_id": "start" }

    ]
  },


  "vertical_education": {
    "response": [
      { "type": "text", "content": "AI transforms learning and governance in academic institutions. Our solutions help educators track outcomes, personalize learning, and streamline campus operations—using GenAI and cognitive automation." }
    ],
    "options": [

      // { "text": "Defect Detection & Counting on High-Speed Conveyors", "next_id": "vertical_textile1" },
      // { "text": "Volumetric Box Analysis", "next_id": "vertical_rvolme" },
      // { "text": "Time & Motion Analysis", "next_id": "vertical_rtime" },
      { "text": "Entry and Exit Movement Detection", "next_id": "vertical_reed" },
      // { "text": "Smart Parking Solution for Airports & Other Sectors", "next_id": "vertical_rspsfao" },
      { "text": "Face Recognition and Voice-Based Access Control", "next_id": "vertical_rfacere" },
      // { "text": "Android & iOS App for Counting Items", "next_id": "vertical_andriod" },
      // { "text": "Retail Store Analytics", "next_id": "vertical_rstore" },
      // { "text": "Shelf Occupancy Analytics", "next_id": "vertical_rshelf" },
      // { "text": "Label Print Verification", "next_id": "vertical_textile2" },
      // { "text": "Work Efficiency & Productivity Tracking", "next_id": "vertical_textile3" },
      // { "text": "Barrel Verification During Oil Change", "next_id": "vertical_roilbarrel" },
      // { "text": "Geofencing and Perimeter Safety", "next_id": "vertical_rgeofen" },
      { "text": "Fire and Violence Detection", "next_id": "vertical_rfvd" },
      { "text": "Face ID, Name, Age, and Gender Detection", "next_id": "vertical_rfai" },
      { "text": "Crowd Detection", "next_id": "vertical_rcrowd" },
      { "text": "Person Fall or Trip Detection", "next_id": "vertical_rpersonfall" },
      // { "text": "Drone Video Analytics", "next_id": "vertical_rdrone" },
      // { "text": "Employee Tracking System (Using BLE-Lora)", "next_id": "vertical_remployee" },
      // { "text": "Warehouse Management System", "next_id": "vertical_rware" },
      // { "text": "Control Tower – A Real-Time Centralized Dashboard", "next_id": "vertical_rcontrol" },
      // { "text": "Predictive Maintenance", "next_id": "vertical_rpred" },
      // { "text": "Asset Management (Using RFID, BLE, etc.)", "next_id": "vertical_rasset" },
      { "text": "Sentiment Analysis", "next_id": "vertical_rsentiment" },
      // { "text": "Primary and Secondary Sales – Prediction and Forecasting", "next_id": "vertical_rprimary" },
      // { "text": "Clean Room Analytics for Pharma Industry", "next_id": "vertical_rclean" },
      { "text": "Document Information Intelligence", "next_id": "vertical_rdoc" },
      // { "text": "Commodity Price Prediction", "next_id": "vertical_rcps" },
      { "text": "Recommendation Engine", "next_id": "vertical_rren" },
      { "text": "Permit to Work Automation", "next_id": "vertical_textile4" },
      { "text": "EHS Digitalization", "next_id": "vertical_textile5" },
      { "text": "Digital Logbook", "next_id": "vertical_textile6" },
      { "text": "Data Lake Management", "next_id": "vertical_textile7" },
      { "text": "Cloud Engineering Services", "next_id": "vertical_textile8" },
      { "text": "Android/iOS Application Development", "next_id": "vertical_textile10" },
      { "text": "Flutter based Application Development", "next_id": "vertical_textile9" },
      { "text": "AI Trainings", "next_id": "vertical_textile11" },
      { "text": "Tech Support & AMC", "next_id": "vertical_textile12" },

      { "text": "See Other Verticals", "next_id": "verticals_menu" },
      { "text": "Go to Main Menu", "next_id": "start" }

    ]
  },

  "vertical_media": {
    "response": [
      { "type": "text", "content": "We help media and telco giants reimagine content, customer interactions, and network insights. From GenAI-driven creation to LLM-powered discovery, we help unlock value across the entertainment ecosystem." }
    ],
    "options": [


      { "text": "Permit to Work Automation", "next_id": "vertical_textile4" },
      { "text": "EHS Digitalization", "next_id": "vertical_textile5" },
      { "text": "Digital Logbook", "next_id": "vertical_textile6" },
      { "text": "Data Lake Management", "next_id": "vertical_textile7" },
      { "text": "Cloud Engineering Services", "next_id": "vertical_textile8" },
      { "text": "Android/iOS Application Development", "next_id": "vertical_textile10" },
      { "text": "Flutter based Application Development", "next_id": "vertical_textile9" },
      { "text": "AI Trainings", "next_id": "vertical_textile11" },
      { "text": "Tech Support & AMC", "next_id": "vertical_textile12" },

      { "text": "See Other Verticals", "next_id": "verticals_menu" },
      { "text": "Go to Main Menu", "next_id": "start" }

    ]
  },

  "about_us_menu": {
    "response": [
      { "type": "text", "content": "What would you like to know about ResoluteAI Software?" }
    ],
    "options": [
      { "text": "Visit  Page", "next_id": "redirect_aboutus" },
      { "text": "About the Company", "next_id": "about_us_company" },
      { "text": "Vision & Mission", "next_id": "about_us_vision_mission" },
      { "text": "Our Values", "next_id": "about_us_values" },
      { "text": "Our Partners & Alliances", "next_id": "about_us_partners" },
      { "text": "Our Milestones", "next_id": "about_us_milestones" },
      { "text": "Our Team", "next_id": "about_us_team" },
      { "text": "Intern Testimonials", "next_id": "about_us_testimonials" },
      { "text": "Go to Main Menu", "next_id": "start" }
    ]
  },

  "redirect_aboutus": {
    "response": [
      { "type": "text", "content": "Redirecting you to About us page..." }
    ],
    "options": [],
    "redirect_url": "/about-us"
  },
  "about_us_company": {
    "response": [
      { "type": "text", "content": "ResoluteAI Software was founded in 2018, with a single goal in mind- \"To enhance trust with AI, for a safer and happier life\". Today, our highly experienced team of seasoned business leaders, solutioning experts, problem solvers, technology experts, leading specialists,and data scientists work towards this common goal." },
      { "type": "text", "content": "We help companies improve productivity and profits by implementing GenAI, Agentic AI, LLM, Computer Vision, machine vision, Data Analytics, NLP technology and IoT. Our purpose is to make AI accessible to everyone." }
    ],
    "options": [{ "text": "Back to About Us menu", "next_id": "about_us_menu" }, { "text": "Go to Main Menu", "next_id": "start" }]
  },
  "about_us_vision_mission": {
    "response": [
      { "type": "list", "title": "VISION:", "items": ["Enhance trust using AI, for a safer and happier Life"] },
      { "type": "list", "title": "MISSION:", "items": ["Collaborate, develop & deploy unique AI products and solutions.", "Create safe & secure places to live and work.", "Transform individuals & organization for the future through continuous learning & training.", "Partner & grow a compassionate social ecosystem."] }
    ],
    "options": [{ "text": "Back to About Us menu", "next_id": "about_us_menu" }, { "text": "Go to Main Menu", "next_id": "start" }]
  },
  "about_us_values": {
    "response": [
      {
        "type": "list", "title": "OUR VALUES:", "items": [
          "Collaboration: We believe in evolving together within teams and beyond. Through our mutual learning approach, we design an optimal solution based for you.",
          "Compassion: We bring compassion into everything we do and for everyone we interact with. A great customer experience is something we deeply care for.",
          "Credibility: We work to establish everlasting credibility and integrity. Our products and solutions are built to give real-world accuracy without any embellishment."
        ]
      }
    ],
    "options": [{ "text": "Back to About Us menu", "next_id": "about_us_menu" }, { "text": "Go to Main Menu", "next_id": "start" }]
  },
  "about_us_partners": {
    "response": [
      { "type": "list", "title": "Our Partners:", "items": ["Welspun", "MilkyMist", "Biocon", "Nvidia", "PESITM"] },
      { "type": "list", "title": "Alliances & Achievements:", "items": ["Nasscom Certificate", "Nasscom Collaboration", "MOU - PESITM", "MOU - Technia Delhi", "MOU - AiC Bihar Vidyapith", "MOU signed With NIFT Tirupur"] }
    ],
    "options": [{ "text": "Back to About Us menu", "next_id": "about_us_menu" }, { "text": "Go to Main Menu", "next_id": "start" }]
  },
  "about_us_milestones": {
    "response": [
      {
        "type": "list", "title": "Our Milestones:", "items": [
          "20+ Successful Projects Delivered",
          "300+ Unique Challenges Solved",
          "3 Proprietary Products Developed",
          "100+ Corporate Professionals Upskilled",
          "500+ Students Trained",
          "3+ Patents Filed"
        ]
      }
    ],
    "options": [{ "text": "Back to About Us menu", "next_id": "about_us_menu" }, { "text": "Go to Main Menu", "next_id": "start" }]
  },
  "about_us_team": {
    "response": [
      { "type": "text", "content": "We are a team of skilled and passionate professionals who work across the company and beyond to help chart the right course of action for our clients." },
      { "type": "list", "title": "Core Team :", "items": ["Sanjay Jha", "Preeti Joshi", "Jeenal Rajgor", "Rishika Agarwala"] }
    ],
    "options": [{ "text": "Back to About Us menu", "next_id": "about_us_menu" }, { "text": "Go to Main Menu", "next_id": "start" }]
  },
  "about_us_testimonials": {
    "response": [
      { "type": "text", "content": "We will provide the latest videos & text for our AI Interns Testimonials soon! Please check back later." }
    ],
    "options": [{ "text": "Back to About Us menu", "next_id": "about_us_menu" }, { "text": "Go to Main Menu", "next_id": "start" }]
  },
  "contact_us": {
    "response": [
      { "type": "text", "content": "Curious to see how our solutions can benefit you? Contact us today!" },
      { "type": "text", "content": "You can reach out via our website's contact form. All fields are compulsory & only official email IDs will be accepted." }
    ],
    "options": [{ "text": "Go to Main Menu", "next_id": "start" }]
  }
};