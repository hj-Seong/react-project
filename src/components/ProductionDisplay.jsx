import { Card, Button } from "react-bootstrap";
import CommentWriteform from "./CommentWriteform";

const ProductionDisplay = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={require(`../img/1.png`)} />
      <Card.Body>
        <Card.Title>책</Card.Title>
        <Card.Text>설명</Card.Text>
        <Button variant="primary">구매</Button>
        {/** 카드 안에 사용할 모달컴포넌트 */}
        <CommentWriteform />
      </Card.Body>
    </Card>
  );
};
export default ProductionDisplay;
