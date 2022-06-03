import ProductionDisplay from "../components/ProductionDisplay";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      {/** 카드 컴포넌트 - ProductionDisplay */}
      <ProductionDisplay />
      {/** 카드 컴포넌트 안에 모달컴포넌트 - CommentWriteform */}
    </div>
  );
};

export default Home;
