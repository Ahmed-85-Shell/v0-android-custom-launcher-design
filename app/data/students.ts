export type Student = {
  id: number
  arabicName: string
  englishName: string
  secondLanguage: 'French' | 'German'
  bus: boolean
}

export const classInfo = {
  school: 'Nozha Schools',
  location: 'Cairo, Egypt',
  grade: 'Primary 4',
  division: 'Boys',
  schoolYear: '2026 / 2027',
}

export const students: Student[] = [
  { id: 1, arabicName: 'أحمد عمرو أحمد عبد العال', englishName: 'Ahmed Amr Ahmed Abdelaal', secondLanguage: 'French', bus: false },
  { id: 2, arabicName: 'آدم أيمن سعيد محمد', englishName: 'Adam Ayman Saied Mohamed', secondLanguage: 'French', bus: false },
  { id: 3, arabicName: 'أسر أحمد عاطف عبد العال', englishName: 'Asser Ahmed Atef Abdel Aal', secondLanguage: 'German', bus: true },
  { id: 4, arabicName: 'إياد أحمد سمير عباس', englishName: 'Eyad Ahmed Samir Abbas', secondLanguage: 'German', bus: true },
  { id: 5, arabicName: 'بيبرس كريم أحمد محمد', englishName: 'Baibars Karim Ahmed Mohamed', secondLanguage: 'German', bus: false },
  { id: 6, arabicName: 'حازم سلام رشاد', englishName: 'Hazem Sallam Rashad', secondLanguage: 'French', bus: true },
  { id: 7, arabicName: 'حامد محمود السيد الشربيني', englishName: 'Hamed Mahmoud El-Saeed El-Sherbiny', secondLanguage: 'German', bus: true },
  { id: 8, arabicName: 'حسن محمد أحمد سعيد محمد صالح', englishName: 'Hassan Mohamed Ahmed Saeed Mohamed Saleh', secondLanguage: 'French', bus: true },
  { id: 9, arabicName: 'حمزة أحمد فتحي سعد', englishName: 'Hamza Ahmad Fathi Saad', secondLanguage: 'French', bus: false },
  { id: 10, arabicName: 'حمزة عصام سليمان شيبة', englishName: 'Hamza Essam Solaiman Sheiba', secondLanguage: 'French', bus: true },
  { id: 11, arabicName: 'حمزة محمود محمد حسين خليفة', englishName: 'Hamza Mahmoud Mohamed Hussein Khalifa', secondLanguage: 'French', bus: false },
  { id: 12, arabicName: 'زياد شادي محمد أحمد', englishName: 'Ziad Shady Mohamed Ahmed', secondLanguage: 'French', bus: true },
  { id: 13, arabicName: 'زياد محمد عبد الجواد', englishName: 'Ziad Mohamed Abdel Gawad', secondLanguage: 'French', bus: false },
  { id: 14, arabicName: 'زين الدين أحمد رفعت عبد الرحمن', englishName: 'Zein Eldeen Ahmed Refat Abdel Rahman', secondLanguage: 'German', bus: true },
  { id: 15, arabicName: 'سليم عمرو عماد أحمد', englishName: 'Selim Amr Emad Ahmed', secondLanguage: 'German', bus: false },
  { id: 16, arabicName: 'عبد الرحمن خالد محمد حسن', englishName: 'Abdelrahman Khaled Mohammed Hassan', secondLanguage: 'German', bus: true },
  { id: 17, arabicName: 'علي إبراهيم سعد خليل', englishName: 'Ali Ibrahim Saad Khalil', secondLanguage: 'French', bus: true },
  { id: 18, arabicName: 'عمر أحمد فتحي سعد', englishName: 'Omar Ahmed Fathi Saad', secondLanguage: 'French', bus: false },
  { id: 19, arabicName: 'عمر محمد مجدي محمد يوسف', englishName: 'Omar Mohamed Magdy Mohamed Youssef', secondLanguage: 'French', bus: true },
  { id: 20, arabicName: 'محمد جلال محمد محمود الجندي', englishName: 'Mohamed Jalal Mohamed Mahmoud El-Gendy', secondLanguage: 'German', bus: true },
  { id: 21, arabicName: 'محمود سيد محمود محمد حسونة', englishName: 'Mahmoud Sayed Mahmoud Mohamed Saleh', secondLanguage: 'German', bus: false },
  { id: 22, arabicName: 'مروان محمد عاشور عبد الله عرفة', englishName: 'Marwan Mohamed Ashour Abdalla Arafa', secondLanguage: 'German', bus: false },
  { id: 23, arabicName: 'نور حازم نور الدين خليل', englishName: 'Nour Hazem Nour El-Din Khalil', secondLanguage: 'German', bus: true },
  { id: 24, arabicName: 'ياسين محمد أحمد', englishName: 'Yassin Mohamed Ahmed', secondLanguage: 'German', bus: false },
  { id: 25, arabicName: 'يحيى محمود جلال محمد', englishName: 'Yahia Mahmoud Galal Mohammed', secondLanguage: 'German', bus: true },
  { id: 26, arabicName: 'يوسف محمد محمود سامي', englishName: 'Youssef Mohamed Mahmoud Samy', secondLanguage: 'French', bus: true },
]

export const sampleTimetable = [
  { time: '07:45 – 08:00', subject: 'Morning Assembly', room: 'School yard' },
  { time: '08:00 – 08:45', subject: 'Mathematics', room: 'Room 214' },
  { time: '08:45 – 09:30', subject: 'English Language', room: 'Room 214' },
  { time: '09:30 – 10:15', subject: 'Science', room: 'Lab 2' },
  { time: '10:15 – 10:35', subject: 'Break', room: 'Courtyard' },
  { time: '10:35 – 11:20', subject: 'Arabic', room: 'Room 214' },
  { time: '11:20 – 12:05', subject: 'Social Studies', room: 'Room 214' },
  { time: '12:05 – 12:35', subject: 'Dhuhr Prayer & Lunch', room: 'Prayer room' },
  { time: '12:35 – 13:20', subject: 'ICT', room: 'Computer lab' },
  { time: '13:20 – 14:05', subject: 'Art & Design', room: 'Art room' },
]
