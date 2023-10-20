import { Stack } from "react-bootstrap";
import { ICategoriesChips } from "../../../interface";
import { useAppSelector } from "../../../store/hook";
import {
  handleVariantForItem,
  insertDashSymbolInWord,
} from "../../utilsCommon";
import Chip from "../Chip/Chip";
import "./categoriesChips.sass";

const CategoriesChips = ({
  categoriesSelected,
  title,
  onSelectCategory,
  style,
}: ICategoriesChips) => {
  const categories = useAppSelector(
    (state) => state.reducer.categoriesAndTransactionStatus.categories
  );
  const originOfTheStyle = insertDashSymbolInWord(style);
  const limitToShowCategories = categories.length >= 4;

  const handleSelectCategory = (item: string) => {
    onSelectCategory(item);
  };

  return (
    <>
      <div className={`categories-chips__title-${originOfTheStyle}`}>
        <span className={`categories-chips__title__span-${originOfTheStyle}`}>
          {title}
        </span>
      </div>
      <Stack
        direction="horizontal"
        gap={3}
        className={`d-flex flex-wrap categories-chips__container-${originOfTheStyle}`}
        style={{ overflowY: limitToShowCategories ? "scroll" : "hidden" }}
      >
        {categories.map((item) => {
          const variant = handleVariantForItem(
            item,
            categoriesSelected.includes(item)
          );
          return (
            <Chip
              key={item}
              item={item}
              onSelectedChip={handleSelectCategory}
              variant={variant}
            />
          );
        })}
      </Stack>
    </>
  );
};

export default CategoriesChips;
