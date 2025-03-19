import getVendorName from "./getVendorName";

test("getVendorName", () => {
  expect(getVendorName("FNG.xlsx")).toBe("FNG");
  expect(getVendorName("FNG test.xlsx")).toBe("FNG");
  expect(getVendorName("FNG__test.xlsx")).toBe("FNG");
});