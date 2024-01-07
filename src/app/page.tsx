import Home from "./home";
import MainLayout from "./layouts/mainLayout";

export default function Index() {
  return (
    <main>
      <MainLayout>
        <Home />
      </MainLayout>
    </main>
  )
}
