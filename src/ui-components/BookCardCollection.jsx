/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import BookCard from "./BookCard";
import { getOverrideProps } from "./utils";
import { Collection } from "@aws-amplify/ui-react";
export default function BookCardCollection(props) {
  const { items, overrideItems, overrides, ...rest } = props;
  return (
    <Collection
      type="list"
      direction="column"
      justifyContent="left"
      items={items || []}
      {...getOverrideProps(overrides, "BookCardCollection")}
      {...rest}
    >
      {(item, index) => (
        <BookCard
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></BookCard>
      )}
    </Collection>
  );
}
