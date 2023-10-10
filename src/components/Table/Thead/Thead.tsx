import theadListTitle from "../utilTable";

const Thead = () => {
  return (
    <thead>
      <tr>
        {theadListTitle.map((title) => {
          return (
            <th key={title} scope="col">
              {title}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default Thead;
