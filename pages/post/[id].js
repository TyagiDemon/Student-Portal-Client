import tw from "tailwind-styled-components";
import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  return <Wrapper>{id}</Wrapper>
}

const Wrapper = tw.div``;