import { useState } from "react";
import { Link } from "react-router";

const stories = ["You", "Ayesha", "Rohan", "Mia", "Dev", "Ishita"];
const suggestions = ["Nora Calder", "Theo James", "Amara Flores"];
const colors = ["from-rose-300 to-orange-200", "from-sky-300 to-indigo-300", "from-amber-200 to-rose-300", "from-violet-300 to-fuchsia-300"];

function Avatar({ name, index = 0, ring = false }) {
  return <div className={`${ring ? "p-[2px] bg-gradient-to-br " : ""}${ring ? colors[index % colors.length] : ""} rounded-full`}><div className={`h-11 w-11 rounded-full bg-gradient-to-br ${colors[index % colors.length]} grid place-items-center text-sm font-bold text-white`}>{name[0]}</div></div>;
}

export default function Feed() {
  const [liked, setLiked] = useState(false);
  const [composer, setComposer] = useState(false);
  return <main className="min-h-screen bg-[#fbfaf8] text-stone-800">
    <div className="mx-auto grid max-w-[1240px] grid-cols-1 lg:grid-cols-[220px_minmax(0,610px)_270px]">
      <aside className="hidden min-h-screen border-r border-stone-200 px-5 py-8 lg:flex lg:flex-col">
        <Brand />
        <nav className="mt-12 grid gap-2 text-sm">
          {["⌂ Home", "⌕ Explore", "♡ Notifications", "✦ Messages"].map((item, index) => <button key={item} className={`rounded-xl px-4 py-3 text-left transition ${index === 0 ? "bg-[#f1e8e0] font-bold text-stone-900" : "text-stone-500 hover:bg-stone-100"}`}>{item}</button>)}
        </nav>
        <button onClick={() => setComposer(true)} className="mt-6 rounded-xl bg-stone-800 py-3 text-sm font-bold text-white shadow-lg shadow-stone-300/50 hover:bg-stone-700">＋ Create post</button>
        <div className="mt-auto flex items-center gap-3 border-t border-stone-200 pt-5"><Avatar name="Kush" /><div className="text-xs"><b className="block">Your profile</b><span className="text-stone-400">View your moments</span></div></div>
      </aside>
      <section className="min-w-0 px-4 py-5 sm:px-8 sm:py-10">
        <header className="mb-9 flex items-center justify-between lg:hidden"><Brand /><button onClick={() => setComposer(true)} className="grid h-9 w-9 place-items-center rounded-full bg-stone-800 text-xl text-white">＋</button></header>
        <div className="flex items-end justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#b18369]">Your space</p><h1 className="mt-2 font-serif text-4xl tracking-tight">Good morning, Kush.</h1><p className="mt-2 text-sm text-stone-500">Catch up with your favorite people.</p></div><button onClick={() => setComposer(true)} className="hidden h-10 w-10 rounded-full bg-stone-800 text-2xl text-white lg:block">＋</button></div>
        <div className="my-8 flex gap-4 overflow-x-auto pb-2">{stories.map((name, index) => <button key={name} className="grid min-w-12 justify-items-center gap-2 text-[11px] text-stone-600"><Avatar name={name} index={index} ring={index !== 0} /><span>{index === 0 ? "Your story" : name}</span></button>)}</div>
        <div className="mb-4 flex items-center justify-between"><h2 className="font-serif text-2xl">Latest moments</h2><button className="text-xs font-bold text-[#a8755b]">See all</button></div>
        <article className="rounded-2xl border border-stone-200 bg-white p-4 shadow-sm"><div className="flex items-center gap-3"><Avatar name="Mia" index={2}/><div className="text-sm"><b className="block">Mia Chen</b><span className="text-xs text-stone-400">2 hours ago · ◉</span></div><button className="ml-auto text-stone-400">•••</button></div><h3 className="mt-5 font-serif text-xl">Slow Sunday</h3><p className="mt-1 text-sm leading-6 text-stone-600">A little golden-hour walk and a perfectly quiet cup of coffee. The small moments are the good ones.</p><div className="mt-4 h-56 rounded-xl bg-[linear-gradient(130deg,#e4bb89,#f9d7b3_38%,#8eaaa4)]"/><div className="mt-3 flex gap-6 border-t border-stone-100 pt-3 text-sm text-stone-500"><button onClick={() => setLiked(!liked)} className={liked ? "text-rose-500" : ""}>{liked ? "♥ Liked" : "♡ Like"}</button><button>◌ Comment</button><button>↗ Share</button></div></article>
        <article className="mt-4 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm"><div className="flex items-center gap-3"><Avatar name="Ayesha" index={0}/><div className="text-sm"><b className="block">Ayesha Khan</b><span className="text-xs text-stone-400">Yesterday · ◉</span></div></div><h3 className="mt-5 font-serif text-xl">New beginnings ✦</h3><p className="mt-1 text-sm leading-6 text-stone-600">Finally made time for something I’ve been wanting to learn for years. Here’s to showing up for yourself.</p></article>
      </section>
      <aside className="hidden border-l border-stone-200 px-6 py-12 lg:block"><p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#b18369]">Your circle</p><h2 className="mt-2 font-serif text-xl">People you may know</h2><div className="mt-7 grid gap-5">{suggestions.map((name, index) => <div key={name} className="flex items-center gap-2"><Avatar name={name} index={index}/><div className="min-w-0 flex-1 text-xs"><b className="block truncate">{name}</b><span className="text-[10px] text-stone-400">{index + 3} mutual friends</span></div><button className="text-[11px] font-bold text-[#a8755b]">Follow</button></div>)}</div><p className="mt-16 text-[10px] leading-5 text-stone-400">About · Help · Privacy · Terms<br/>© 2026 Luma</p></aside>
    </div>
    {composer && <Composer onClose={() => setComposer(false)} />}
  </main>;
}

function Brand() { return <Link to="/feed" className="inline-flex items-center gap-2 text-2xl font-bold tracking-tight"><span className="grid h-7 w-7 place-items-center rounded-lg bg-stone-800 font-serif text-2xl text-white">l</span>Luma</Link>; }
function Composer({ onClose }) { const [posted, setPosted] = useState(false); return <div onMouseDown={onClose} className="fixed inset-0 z-20 grid place-items-center bg-stone-950/50 p-5"><div onMouseDown={(event) => event.stopPropagation()} className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl"><button onClick={onClose} className="float-right text-xl text-stone-400">×</button><p className="text-[10px] font-bold uppercase tracking-[.18em] text-[#b18369]">Create a moment</p><h2 className="mt-2 font-serif text-3xl">What’s on your mind?</h2>{posted ? <div className="py-10 text-center"><p className="text-2xl">✦</p><p className="mt-3 text-stone-600">Your post is ready as a UI preview.</p><button onClick={onClose} className="mt-5 rounded-xl bg-stone-800 px-5 py-2.5 text-sm font-bold text-white">Done</button></div> : <form onSubmit={(event) => { event.preventDefault(); setPosted(true); }} className="mt-6 grid gap-3"><input required placeholder="Give it a title" className="rounded-xl border border-stone-200 p-3 text-sm outline-none focus:border-[#b18369]"/><textarea required placeholder="Write a little something…" className="min-h-28 rounded-xl border border-stone-200 p-3 text-sm outline-none focus:border-[#b18369]"/><button type="button" className="rounded-xl border border-dashed border-[#cfb9aa] bg-[#fdf9f5] p-4 text-sm font-bold text-[#9d7258]">⌁ Add a photo</button><button className="rounded-xl bg-stone-800 py-3 text-sm font-bold text-white">Publish moment →</button></form>}</div></div>; }
