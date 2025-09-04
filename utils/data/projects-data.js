export const projectsData = [
    {
        id: 1,
        name: 'Real-time-Object-Detection-and-Tracking-for-Autonomous-Surveillance',
        description: "Designed and implemented a lightweight real-time object detection and tracking system for autonomous surveillance. Utilized YOLOv8 for object detection and a simplified DeepSORT tracker for maintaining unique IDs across frames. Optimized for Apple Silicon (macOS), the system provides both a desktop interface and a web dashboard with live video feed and tracking logs, while also supporting custom YOLO model training for domain-specific applications.",
        tools: ['Python', 'YOLOv8', 'OpenCV', 'DeepSORT', 'Flask', 'PyTorch', 'MPS (Apple Silicon)'],
        role: 'Academic Project (Computer Vision & AI)',
        code: 'https://github.com/yourusername/real-time-object-detection-tracking',
        demo: 'http://localhost:5000'
    },
    {
        id: 2,
        name: 'Retrieval-Based Domain Chatbot',
        description: "Implemented a retrieval-based chatbot in Python tailored for a focused domain. Leveraged TF-IDF vectorization and cosine similarity to retrieve the most relevant responses from a knowledge base built by scraping 20+ websites using BeautifulSoup. Incorporated a JSON-based user profiling system to store queries, names, likes, and dislikes, enabling personalized and context-aware interactions. Achieved 90.2% precision in response accuracy.",
        tools: ['Python', 'TF-IDF', 'Cosine Similarity', 'BeautifulSoup', 'JSON'],
        role: 'Academic Project (NLP & Chatbots)',
        code: 'https://github.com/yourusername/retrieval-based-chatbot',
        demo: 'http://localhost:5000'
    },
    
    {
        id: 3,
        name: 'Airline Booking System',
        description: "A standalone Java + MySQL application for booking flights. Features include OTP-based login, password recovery, flight search with sorting, booking management, and an admin dashboard for managing flights.",
        tools: ['Java', 'Swing/AWT', 'MySQL'],
        role: 'Academic Project',
        code: '', // replace with actual repo link if available
        demo: '', // add demo link if you have one
    },
    {
        id: 4,
        name: 'Natural Language to SQL (Seq2SQL)',
        description: "An advanced NLP + Deep Learning project that translates natural language questions into SQL queries. The system uses a Seq2SQL model trained on question-query pairs to understand user intent and automatically generate accurate SQL statements. It supports SELECT column prediction, AGGREGATION functions (COUNT, MAX, MIN, AVG, etc.), and WHERE clause conditions. The project includes modules for data preprocessing, model training, evaluation, and database execution. Trained models are saved for reuse, allowing users to query databases without needing SQL knowledge. This makes it useful for academic research, intelligent database interfaces, and chatbot integrations.",
        tools: ['Python', 'PyTorch', 'MySQL/SQLite'],
        role: 'Academic / Research Project',
        code: 'https://github.com/your-repo-link', // replace with actual repo link
        demo: '', // add demo link if available
    }
    
    
];



// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
// },