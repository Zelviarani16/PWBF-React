import React from 'react';
import { Breadcrumb, Card } from 'react-bootstrap';

const BlankPage = () => {
  return (
    <div className="page-container">

      {/* TITLE HALAMAN */}
      <h4 className="font-weight-bold mb-3">Blank Page</h4>

      {/* BREADCRUMB */}
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Blank Page</Breadcrumb.Item>
      </Breadcrumb>

      {/* CARD KONTEN UTAMA */}
      <Card className="mt-3">
        <Card.Body>
          <p>Konten PWBF. 
          </p>
        </Card.Body>
      </Card>

    </div>
  );
}

export default BlankPage;
