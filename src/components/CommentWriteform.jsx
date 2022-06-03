import { useState } from "react";
import { Button, Modal, Form, FloatingLabel } from "react-bootstrap";

const CommentWriteform = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        후기작성
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>후기를 작성해주세요</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/** 코멘트 적는 란 */}
          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control as="textarea" placeholder="Leave a comment here" style={{ height: "100px" }} />
          </FloatingLabel>
          {/** 파일 가져오는 태그 */}
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>추가할 이미지를 선택하세요</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            취소
          </Button>
          <Button variant="primary" onClick={handleClose}>
            작성
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CommentWriteform;
