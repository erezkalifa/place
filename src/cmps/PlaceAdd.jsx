// import { useState } from "react";

// export function PlaceAdd({ onAddPlace }) {
//   const [txt, setTxt] = useState("");

//   function onSubmit(ev) {
//     ev.preventDefault();
//     const clean = txt.trim();
//     if (!clean) return;
//     onAddPlace(clean);
//     setTxt("");
//   }

//   return (
//     <form className="Place-add" onSubmit={onSubmit}>
//       <input
//         type="text"
//         placeholder="מה צריך לעשות?"
//         value={txt}
//         onChange={(ev) => setTxt(ev.target.value)}
//       />
//       <button>הוסף</button>
//     </form>
//   );
// }
