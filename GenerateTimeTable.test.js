import React from "react";
import { DuplicateTo, InsertData } from "../Genereate TimeTable/DuplicateTo";
import EditTimeTable from "./EditTimeTable";
import TimeTableSearchBox from "./TimeTableSearchBox";
import DuplicateFrom from "./DuplicateFrom";
import DropBox from "./DropBox";
import DuplicateSession from "./DuplicateSession";
import EditTimeTableDialog from "./EditTimeTableDialog";
import AdminGenerateTimetable from "./AdminGenerateTimetable";
import AdminTimetableTreeView from "./AdminTimeTableTreeView";
import AdminTimetableView from "./AdminTimetableView";

describe("AdminGenerateTimetable component", () => {
  it("should render without errors", () => {
    expect(AdminGenerateTimetable).toMatchSnapshot();
  });
});
describe("AdminTimeTableTreeView component", () => {
  it("should render without errors", () => {
    expect(AdminTimetableTreeView).toMatchSnapshot();
  });
});
describe("AdminTimetableView component", () => {
  it("should render without errors", () => {
    expect(AdminTimetableView).toMatchSnapshot();
  });
});
describe("DuplicateTo component", () => {
  it("should render without errors", () => {
    expect(DuplicateTo).toMatchSnapshot();
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
describe("DuplicateSession component", () => {
  it("should render without errors", () => {
    expect(DuplicateSession).toMatchSnapshot();
  });
});
describe("EditTimeTable", () => {
  it("should render without error", () => {
    expect(EditTimeTable).toMatchSnapshot();
  });
});
describe("EditTimeTableDialog component", () => {
  it("should render without errors", () => {
    expect(EditTimeTableDialog).toMatchSnapshot();
  });
});
describe("InsertData component", () => {
  it("should render without error ", () => {
    expect(InsertData).toMatchSnapshot();
  });
});
describe("TimeTableSearchBox component", () => {
  it("should render without errors", () => {
    expect(TimeTableSearchBox).toMatchSnapshot();
  });
});
