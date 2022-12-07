import { createSlice } from "@reduxjs/toolkit";

const configuratorSlice = createSlice({
    name: 'configurator',
    initialState: [],
    reducers: {
        setSteps: (state, action) => {
            return action.payload?.map((step, index) => {
                return {
                    ...step,
                    completed: false,
                    checkedValues: [],
                    isCurrentStep: index === 0
                }
            })
        },

        toggleConfig: (state, action) => {
            const step = state.find(step => step.id === action.payload?.categoryId) || {}
            const checkedConfig = step?.checkedValues?.findIndex(config => config?.id === action.payload?.id)

            if (checkedConfig !== -1) {
                step?.checkedValues?.splice(checkedConfig, checkedConfig + 1)
            } else {
                step?.multiply ? step?.checkedValues?.push(action.payload) : step.checkedValues = [action.payload]
            }
        },

        nextStep: (state) => {
            const currentStepIndex = state.findIndex(step => step.isCurrentStep)

            if (state[currentStepIndex]?.checkedValues?.length) {
                const step = state.find((_, index) => index === currentStepIndex)
                step.completed = true
                step.isCurrentStep = false
                const next = state.find((_, index) => index === currentStepIndex + 1) || {}
                next.isCurrentStep = true
            }
        },
    }
})

export const { setSteps, toggleConfig, nextStep } = configuratorSlice.actions
export default configuratorSlice.reducer