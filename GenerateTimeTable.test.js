import React from "react";
import { DuplicateTo, InsertData } from "../Genereate TimeTable/DuplicateTo";
import EditTimeTable from "./EditTimeTable";
import TimeTableSearchBox from "./TimeTableSearchBox";
import DuplicateFrom from "./DuplicateFrom";
import DropBox from "./DropBox";
import DuplicateSession from "./DuplicateSession";
import EditTimeTableDialog from "./EditTimeTableDialog";

describe("DuplicateTo component", () => {
  it("should render without errors", () => {
    expect(DuplicateTo).toMatchSnapshot();
  });
});
describe("InsertData component", () => {
  it("should render without error ", () => {
    expect(InsertData).toMatchSnapshot();
  });
});
describe("EditTimeTable", () => {
  it("should render without error", () => {
    expect(EditTimeTable).toMatchSnapshot();
  });
});
describe("TimeTableSearchBox component", () => {
  it("should render without errors", () => {
    expect(TimeTableSearchBox).toMatchSnapshot();
  });
});
describe("DuplicateFrom component", () => {
  it("should render without error", () => {
    expect(DuplicateFrom).toMatchSnapshot();
  });
});
describe("Drop box", () => {
  it("should render without errors", () => {
    expect(DropBox).toMatchSnapshot();
  });
});
describe("DubplicateSession component", () => {
  it("should render without errors", () => {
    expect(DuplicateSession).toMatchSnapshot();
  });
});
describe("EditTimeTableDialog component", () => {
  it("should render without errors", () => {
    expect(EditTimeTableDialog).toMatchSnapshot();
  });
});
