import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import React from "react";
import { useIntl } from "react-intl";

import CardTitle from "@saleor/components/CardTitle";
import { Locale, localeNames } from "@saleor/components/Locale";
import SingleAutocompleteSelectField from "@saleor/components/SingleAutocompleteSelectField";

interface StaffPreferencesProps {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
}

const StaffPreferences: React.StatelessComponent<StaffPreferencesProps> = ({
  locale,
  onLocaleChange
}) => {
  const intl = useIntl();

  return (
    <Card>
      <CardTitle
        title={intl.formatMessage({
          defaultMessage: "Preferences",
          description: "section header"
        })}
      />
      <CardContent>
        <SingleAutocompleteSelectField
          choices={Object.values(Locale).map(locale => ({
            label: localeNames[locale],
            value: locale
          }))}
          displayValue={localeNames[locale]}
          helperText={intl.formatMessage({
            defaultMessage:
              "Selecting this will change the language of your dashboard"
          })}
          label={intl.formatMessage({
            defaultMessage: "Preferred Language"
          })}
          name="locale"
          value={locale}
          onChange={event => onLocaleChange(event.target.value)}
        />
      </CardContent>
    </Card>
  );
};
StaffPreferences.displayName = "StaffPreferences";
export default StaffPreferences;
