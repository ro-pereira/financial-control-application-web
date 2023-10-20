import { useState } from "react";
import { Col, Collapse, Stack } from "react-bootstrap";
import ActiveButton from "../../common/components/ActiveButton/ActiveButton";

const Filter = () => {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(!openFilter);
  };

  return (
    <Stack>
      <Col>
        <ActiveButton
          open={openFilter}
          toggleOpen={handleOpenFilter}
          label="filters"
        />
      </Col>
      <Collapse in={openFilter}>
        <div>
          <h1>Filter</h1>
        </div>
      </Collapse>
    </Stack>
  );
};

export default Filter;
