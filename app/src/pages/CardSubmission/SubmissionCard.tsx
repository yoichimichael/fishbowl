import * as React from "react"
import { Card, TextField, styled, Box } from "@material-ui/core"

function SubmissionCard(props: {
  onChange: (value: string) => void
  onError: (value: boolean) => void
}) {
  const starting_letter = "A" // TODO update this.
  const [word, setWord] = React.useState("")

  const hasError = (word: string) => {
    return (
      word.length > 0 &&
      word[0].toLocaleUpperCase() !== starting_letter.toLocaleUpperCase()
    )
  }

  return (
    <StyledCard>
      <Box display="flex" justifyContent="center" p={4} alignContent="center">
        <TextField
          size="medium"
          value={word}
          error={hasError(word)}
          helperText={
            hasError(word) &&
            `Word must start with letter ${starting_letter.toLocaleUpperCase()}!`
          }
          onChange={({ target: { value } }) => {
            setWord(value)
            props.onChange(value)
            props.onError(hasError(word))
          }}
        />
      </Box>
    </StyledCard>
  )
}

const StyledCard = styled(Card)({
  height: 150
})

export default SubmissionCard