'use client'

import { useMemo, useState } from 'react'
import {
  ArrowDownRight,
  ArrowRight,
  BookOpen,
  BusFront,
  Check,
  CircleHelp,
  Clock3,
  Expand,
  Globe2,
  LayoutGrid,
  MonitorUp,
  Moon,
  PenTool,
  Search,
  Sparkles,
  Sun,
  UsersRound,
  Wifi,
  X,
} from 'lucide-react'
import { classInfo, sampleTimetable, students, type Student } from '../data/students'

type View = 'Home' | 'All apps' | 'Students'

const tools = [
  { label: 'Whiteboard', detail: 'Explain Everything', icon: PenTool, color: 'coral' },
  { label: 'Share', detail: 'Screen sharing', icon: MonitorUp, color: 'blue' },
  { label: 'Internet', detail: 'Chromium browser', icon: Globe2, color: 'violet' },
  { label: 'Timer', detail: 'Classroom timer', icon: Clock3, color: 'amber' },
  { label: 'Appearance', detail: 'Launcher themes', icon: Sparkles, color: 'pink' },
  { label: 'Help', detail: 'Quick help', icon: CircleHelp, color: 'mint' },
]

function Flag({ language }: { language: Student['secondLanguage'] }) {
  return (
    <span className={`flag flag-${language === 'French' ? 'fr' : 'de'}`} aria-label={language} title={language}>
      <span className="sr-only">{language}</span>
    </span>
  )
}

function TopBar({ view, setView }: { view: View; setView: (view: View) => void }) {
  return (
    <header className="topbar glass-panel">
      <button className="brand" onClick={() => setView('Home')} aria-label="Nozha Launcher home">
        <span className="brand-seal"><BookOpen size={17} /></span>
        <span className="brand-name">NOZHA<small>LAUNCHER</small></span>
      </button>
      <nav className="topnav" aria-label="Main navigation">
        {(['Home', 'All apps', 'Students'] as View[]).map((item) => (
          <button key={item} className={`nav-link ${view === item ? 'active' : ''}`} onClick={() => setView(item)}>
            {item === 'All apps' && <LayoutGrid size={15} />}{item}
          </button>
        ))}
      </nav>
      <div className="topbar-right"><span className="wifi-label"><Wifi size={15} /> Nozha-Staff</span><button className="icon-button" aria-label="Fullscreen"><Expand size={17} /></button></div>
    </header>
  )
}

function SideRail({ onOpen }: { onOpen: (label: string) => void }) {
  return (
    <aside className="side-rail glass-panel" aria-label="Quick apps">
      {tools.map(({ label, icon: Icon }) => (
        <button className="rail-button" key={label} onClick={() => onOpen(label)}>
          <Icon size={21} strokeWidth={1.8} /><span>{label}</span>
        </button>
      ))}
    </aside>
  )
}

function LanguageChip({ language }: { language: Student['secondLanguage'] }) {
  return <span className="language-chip"><Flag language={language} /><span>{language}</span></span>
}

function StudentsTable({ query }: { query: string }) {
  const filtered = students.filter((student) => {
    const value = `${student.englishName} ${student.arabicName} ${student.secondLanguage}`.toLowerCase()
    return value.includes(query.toLowerCase())
  })

  return (
    <div className="table-wrap">
      <table className="student-table">
        <thead><tr><th>#</th><th>Arabic name</th><th>English name</th><th>2nd language</th><th>Bus</th></tr></thead>
        <tbody>{filtered.map((student) => (
          <tr key={student.id}>
            <td className="row-number">{String(student.id).padStart(2, '0')}</td>
            <td className="arabic-cell" lang="ar" dir="rtl">{student.arabicName}</td>
            <td className="english-cell">{student.englishName}</td>
            <td><LanguageChip language={student.secondLanguage} /></td>
            <td>{student.bus ? <span className="bus-cell"><BusFront size={16} /> Assigned</span> : <span className="no-bus">—</span>}</td>
          </tr>
        ))}</tbody>
      </table>
      {filtered.length === 0 && <div className="no-results">No students match that search.</div>}
    </div>
  )
}

function StudentsPage() {
  const [query, setQuery] = useState('')
  const busCount = students.filter((student) => student.bus).length
  return (
    <section className="students-page glass-panel">
      <div className="students-title-row">
        <div><p className="eyebrow">CLASS REGISTER</p><h1>Students</h1></div>
        <span className="source-pill"><Check size={14} /> PDF register · {classInfo.schoolYear}</span>
      </div>
      <div className="class-summary">
        <div className="class-summary-main"><div className="class-icon"><UsersRound size={20} /></div><div><span className="class-name">{classInfo.grade} · {classInfo.division}</span><span className="class-school">{classInfo.school} · {classInfo.location}</span></div></div>
        <div className="summary-stat"><strong>{students.length}</strong><span>Students</span></div>
        <div className="summary-stat"><strong>{busCount}</strong><span>Bus assigned</span></div>
        <div className="summary-stat language-stat"><strong>FR · DE</strong><span>Second languages</span></div>
      </div>
      <label className="search-field"><Search size={17} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search by student name or language" aria-label="Search students" />{query && <button type="button" onClick={() => setQuery('')} aria-label="Clear search"><X size={15} /></button>}</label>
      <StudentsTable query={query} />
      <p className="data-note">Student details shown from the class register PDF provided for this launcher preview.</p>
    </section>
  )
}

function StudentWidget({ onOpen }: { onOpen: () => void }) {
  return (
    <button className="student-widget glass-panel" onClick={onOpen} aria-label={`Open ${students.length} student records for ${classInfo.grade} ${classInfo.division}`}>
      <div className="widget-heading"><span>CLASS REGISTER</span><span className="student-count"><UsersRound size={14} />{students.length}</span></div>
      <strong>{classInfo.grade} · {classInfo.division}</strong>
      <span className="widget-school">{classInfo.school} · {classInfo.location}</span>
      <span className="widget-footer">View all {students.length} students <ArrowRight size={14} /></span>
    </button>
  )
}

function TimetableWidget() {
  return (
    <section className="timetable-widget glass-panel">
      <div className="widget-heading"><span>TODAY&apos;S TIMETABLE</span><span className="live-pill"><i /> Sample</span></div>
      <div className="timetable-meta"><span>{classInfo.grade} · {classInfo.division}</span><span>Room 214</span></div>
      <div className="next-class"><div className="next-icon"><ArrowRight size={18} /></div><div><span>UP NEXT · {sampleTimetable[0].time}</span><strong>{sampleTimetable[0].subject}</strong><small>{sampleTimetable[0].room}</small></div></div>
      <div className="timetable-mini">{sampleTimetable.slice(1, 3).map((item) => <div key={item.time}><span>{item.time}</span><span>{item.subject}</span></div>)}</div>
      <p className="sample-note">Example schedule — connect a school timetable source for live data.</p>
    </section>
  )
}

function HomePage({ onStudents, onOpen }: { onStudents: () => void; onOpen: (label: string) => void }) {
  const now = new Date()
  const hour = now.getHours()
  const greeting = hour < 12 ? 'Good morning' : hour < 17 ? 'Good afternoon' : 'Good evening'
  return (
    <>
      <SideRail onOpen={onOpen} />
      <main className="home-layout">
        <section className="hero-copy">
          <p className="eyebrow">NOZHA SCHOOLS <span>·</span> CAIRO</p>
          <div className="time-display" aria-label={now.toLocaleTimeString('en-EG', { hour: 'numeric', minute: '2-digit' })}>
            {now.toLocaleTimeString('en-EG', { hour: '2-digit', minute: '2-digit', hour12: true }).replace(' ', '')}
          </div>
          <div className="hero-divider" />
          <div className="weather-line"><Sun size={20} /><strong>24°</strong><span>Sunny · Cairo</span></div>
          <h1>{greeting}, Nozha learners.</h1>
          <p className="hero-description">Your classroom is ready. Pick up where learning begins.</p>
          <button className="primary-cta" onClick={() => onOpen('Whiteboard')}><PenTool size={17} /> Open Whiteboard <ArrowRight size={16} /></button>
          <div className="gesture-hints"><span><ArrowDownRight size={14} /> Swipe up · App drawer</span><span><MonitorUp size={14} /> Share your screen</span><span><Sparkles size={14} /> Personalize the launcher</span></div>
        </section>
        <aside className="home-widgets" aria-label="Classroom widgets">
          <section className="prayer-widget glass-panel"><div className="widget-heading"><span>CAIRO PRAYER TIMES · SAMPLE</span><button aria-label="Prayer settings"><Moon size={14} /></button></div><div className="prayer-content"><div><strong>12:08</strong><span>Dhuhr</span></div><div className="prayer-status">Next prayer <b>in 42 min</b></div></div></section>
          <TimetableWidget />
          <StudentWidget onOpen={onStudents} />
        </aside>
      </main>
    </>
  )
}

function AppsPage({ onOpen }: { onOpen: (label: string) => void }) {
  return <section className="apps-page glass-panel"><p className="eyebrow">NOZHA LAUNCHER</p><h1>All apps</h1><p className="subheading">Your classroom tools, ready to launch.</p><div className="apps-grid">{tools.map(({ label, detail, icon: Icon, color }) => <button className="app-tile" key={label} onClick={() => onOpen(label)}><span className={`app-icon ${color}`}><Icon size={22} /></span><span><strong>{label}</strong><small>{detail}</small></span><ArrowRight className="app-arrow" size={16} /></button>)}</div><button className="app-tile students-tile" onClick={() => onOpen('Students')}><span className="app-icon mint"><UsersRound size={22} /></span><span><strong>Students</strong><small>{students.length} records · {classInfo.grade} {classInfo.division}</small></span><ArrowRight className="app-arrow" size={16} /></button></section>
}

function AppNotice({ app, onClose }: { app: string; onClose: () => void }) {
  const details: Record<string, string> = { Whiteboard: 'Explain Everything is ready to open from this Promethean panel.', Internet: 'Chromium is the configured browser for this panel.', Share: 'Use the Promethean screen-sharing app to share this display.', Timer: 'Classroom timer controls are ready.', Appearance: 'Wallpaper and launcher appearance settings.', Help: 'Quick help for the Nozha classroom launcher.' }
  return <div className="notice-backdrop" role="presentation" onClick={onClose}><section className="notice-dialog glass-panel" role="dialog" aria-modal="true" aria-labelledby="notice-title" onClick={(event) => event.stopPropagation()}><button className="dialog-close" onClick={onClose} aria-label="Close"><X size={18} /></button><p className="eyebrow">QUICK LAUNCH</p><h2 id="notice-title">{app}</h2><p>{details[app] ?? 'Open the selected launcher section.'}</p><button className="primary-cta" onClick={onClose}>Got it <Check size={16} /></button></section></div>
}

export default function LauncherDashboard() {
  const [view, setView] = useState<View>('Home')
  const [notice, setNotice] = useState<string | null>(null)
  const open = (label: string) => {
    if (label === 'Students') { setView('Students'); return }
    setNotice(label)
  }
  const page = useMemo(() => {
    if (view === 'Students') return <StudentsPage />
    if (view === 'All apps') return <AppsPage onOpen={open} />
    return <HomePage onStudents={() => setView('Students')} onOpen={open} />
  }, [view])

  return (
    <div className="launcher-shell">
      <div className="campus-image" aria-hidden="true" />
      <div className="campus-shade" aria-hidden="true" />
      <TopBar view={view} setView={setView} />
      {page}
      {notice && <AppNotice app={notice} onClose={() => setNotice(null)} />}
    </div>
  )
}
