import { redirect } from "next/dist/server/api-utils";
const defaultCategory = '01'

const HomePage = async () => {
  redirect(`/category/${id}`)
};

export default HomePage;
