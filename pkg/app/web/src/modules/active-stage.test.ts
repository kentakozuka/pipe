import {
  activeStageSlice,
  updateActiveStage,
  clearActiveStage,
} from "./active-stage";

describe("activeStageSlice reducer", () => {
  it("should handle initial state", () => {
    expect(
      activeStageSlice.reducer(undefined, {
        type: "TEST_ACTION",
      })
    ).toBeNull();
  });

  it(`should handle ${updateActiveStage.type}`, () => {
    expect(
      activeStageSlice.reducer(undefined, {
        type: updateActiveStage.type,
        payload: {
          deploymentId: "dep-1",
          name: "deployment",
          stageId: "stage-1",
        },
      })
    ).toEqual({
      deploymentId: "dep-1",
      name: "deployment",
      stageId: "stage-1",
    });
  });

  it(`should handle ${clearActiveStage.type}`, () => {
    expect(
      activeStageSlice.reducer(
        { deploymentId: "dep-1", name: "deployment", stageId: "stage-1" },
        {
          type: clearActiveStage.type,
        }
      )
    ).toBeNull();
  });
});
