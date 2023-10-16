import * as testObj from "./components/Profile/Profile";
import Profile from "./components/Profile/Profile";
import { waitFor, render, screen } from "@testing-library/react";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(() => "Test getOrdererName"),
  useDispatch: jest.fn(),
}));

describe("Profile", () => {
  

  test("Profile component", async () => {
    const testName = "Test name";
    const view = render(<Profile name={testName} />);
 
    expect(view).toMatchSnapshot();
    const div = screen.getByTestId('test-id');
    expect(div).toBeInTheDocument();
    expect(div).toHaveTextContent(testName);
  });
});
