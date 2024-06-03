import Link from "next/link"

export default function Custom404() {
  return (
    <div style={{ margin: "0 auto", textAlign: "center", padding: "100px" }}>
      <h1 style={{ color: "#fff" }}>404 страница не найдена</h1>
      <Link href={"/"} style={{ color: "#fff", marginTop: "30px", display: "block" }}>
        На главную
      </Link>
    </div>
  )
}
