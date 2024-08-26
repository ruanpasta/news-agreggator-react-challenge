import { render, screen } from "@testing-library/react";
import NoticeListLayout from "../componesnts/NoticeList";

jest.mock("../componesnts/Notice", () =>
  jest.fn(() => <div>Mocked Notice</div>)
);

describe("NoticeListLayout", () => {
  const notices = [
    {
      title: "Sample Notice",
      author: "Author Name",
      source: "Source Name",
      description: "Sample description.",
      publishedAt: "2024-08-23T12:20:12Z",
      url: "https://example.com/image.jpg",
      urlToImage: "https://example.com/image.jpg",
    },
    {
      title: "Second Sample Notice",
      author: "Second Author Name",
      source: "Second Source Name",
      description: "Second Sample description.",
      publishedAt: "2024-08-24T12:20:12Z",
      url: "https://example.com/image.jpg",
      urlToImage: "https://example.com/image.jpg",
    },
  ];

  it("should render a grid with the right quantity of notice elements", () => {
    render(<NoticeListLayout notices={notices} />);

    const noticeList = screen.getAllByText("Mocked Notice");
    expect(noticeList).toHaveLength(notices.length);
  });

  it("should set the correct templateColumns", () => {
    render(<NoticeListLayout notices={notices} />);
    const gridElement = screen.getByTestId("notice-list-container");
    expect(gridElement).toHaveStyle(
      "grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))"
    );
  });
});
