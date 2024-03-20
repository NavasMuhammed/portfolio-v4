import Home from "./home";
import MainLayout from "./layouts/mainLayout";

export default function Index() {
  return (
    <main>
      <MainLayout>
        <Home />
      </MainLayout>
      <hr style={{ borderColor: 'transparent', margin: 50 }} />
    </main>
  )
}
