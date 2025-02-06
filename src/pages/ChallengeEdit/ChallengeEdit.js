import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import { FormHelperText } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { DateTimePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import React, { useState } from "react";
import challengeEdit from "../../api/challengeEdit";
import deleteChallenge from "../../api/deleteChallenge";
import { FlexColumn, FlexRow } from "../../utils/containers";
import customTheme from "../../utils/customTheme";
import { formatDateString } from "../../utils/globals";
import LOCAL_STORAGE from "../../utils/localStorage";

import theme from "../../utils/theme";
import ButtonEdit from "./ButtonEdit";
import ChallengeEditStyle from "./ChallengeEditStyle";
import Section from "./Section";
import Subtitle from "./Subtitle";

const ChallengeEdit = ({ challenge, setChallengeUpdateResult }) => {
  console.log("erferf", challenge);
  const initialDeadline = dayjs(challenge.deadline, "YYYY-MM-DDTHH:mm:ssZ");
  const [deadline, setDeadline] = useState(initialDeadline);
  const [description, setDescription] = useState(challenge.description);
  const [deadlineError, setDeadlineError] = useState(false);
  const [result, setResult] = useState();
  const [descriptionError, setDescriptionError] = useState(false);

  const validateForm = () => {
    let valid = true;

    if (!deadline || !dayjs(deadline).isValid()) {
      setDeadlineError("Deadline date and time are required");
      valid = false;
    } else {
      setDeadlineError(false);
    }

    if (!description || description.trim() === "") {
      setDescriptionError("Description is required");
      valid = false;
    } else {
      setDescriptionError(false);
    }

    return valid;
  };

  const challengeDelete = async () => {
    try {
      if (
        window.confirm(
          `Are you sure you want to delete challenge ${challenge.title}?`
        )
      ) {
        await deleteChallenge(challenge.title, setChallengeUpdateResult);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const challengeEditSubmit = async () => {
    const validated = validateForm();
    if (!validated) {
      return;
    }
    try {
      await challengeEdit(
        {
          challenge_title: challenge.title,
          deadline: formatDateString(
            deadline,
            "DD.MM.YYYY",
            "YYYY-MM-DDTHH:mm:ssZ"
          ),
          description: description,
        },
        localStorage.getItem(LOCAL_STORAGE.AUTH_TOKEN),
        setResult
      );
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    if (result === null) {
      window.location.replace(`/challenge/${challenge.title}`);
    }
  }, [result, challenge.title]);

  const handleDateTimeChange = (newDateTime) => {
    if (newDateTime && dayjs(newDateTime).isValid()) {
      setDeadline(newDateTime);
    }
  };

  return (
    <ChallengeEditStyle>
      <ThemeProvider theme={customTheme}>
        <FlexColumn width="800px" gap="20px">
          <Section title={"Customize Challenge"}>
            <div
              style={{ flexDirection: "column", display: "flex", gap: "18px" }}
            >
              <div>
                <Subtitle>Deadline</Subtitle>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <FlexRow width="100%" className="deadline" gap="16px">
                    <DateTimePicker
                      error={!!deadlineError}
                      sx={{
                        width: "100%",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "8px",
                          "& fieldset": {
                            borderColor: deadlineError
                              ? theme.colors.red
                              : "rgba(94, 94, 94, 1)",
                          },
                        },
                      }}
                      value={deadline}
                      onChange={handleDateTimeChange}
                      format="DD.MM.YYYY HH:mm"
                      ampm={false}
                      timeSteps={{ minutes: 1 }}
                    />
                  </FlexRow>
                </LocalizationProvider>
                {deadlineError && (
                  <FormHelperText
                    style={{
                      color: theme.colors.red,
                      marginRight: "auto",
                      marginLeft: "20px",
                    }}
                  >
                    {deadlineError}
                  </FormHelperText>
                )}
              </div>

              <div>
                <Subtitle>Description</Subtitle>

                <TextareaAutosize
                  className={descriptionError ? "error" : ""}
                  aria-label="minimum height"
                  minRows={6}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Description"
                  style={{ borderColor: "rgba(94, 94, 94, 1)" }}
                />
                {descriptionError && (
                  <FormHelperText
                    style={{
                      color: theme.colors.red,
                      marginRight: "auto",
                      marginLeft: "20px",
                    }}
                  >
                    {descriptionError}
                  </FormHelperText>
                )}
              </div>
            </div>

            <FlexRow
              alignmentX="end"
              style={{
                margin: "6px 8px 0px 0px",
              }}
              className="submitButton"
            >
              <ButtonEdit
                backgroundColor={theme.colors.white}
                color="#5E5E5E"
                borderColor={theme.colors.green700}
                height="40px"
                width="117px"
                handler={() => challengeEditSubmit()}
              >
                Save
              </ButtonEdit>
            </FlexRow>
          </Section>

          <Section title={"Challenge Settings"}>
            <FlexRow alignmentX="space-between" margin="0px 8px 0px 8px">
              <span
                style={{
                  fontSize: "16px",
                  fontWeight: 400,
                  fontFamily: `"Inter", sans-serif`,
                  letterSpacing: "-0.48px",
                  color: "rgba(94, 94, 94, 1)",
                }}
              >
                Deleting this challenge will erase all data permanently. This
                action cannot be undone.
              </span>

              <ButtonEdit
                backgroundColor={theme.colors.white}
                color="rgba(179, 20, 20, 1)"
                borderColor={theme.colors.green700}
                width="117px"
                height="40px"
                handler={() => challengeDelete()}
              >
                Delete
              </ButtonEdit>
            </FlexRow>
          </Section>
        </FlexColumn>
      </ThemeProvider>
    </ChallengeEditStyle>
  );
};

export default ChallengeEdit;
