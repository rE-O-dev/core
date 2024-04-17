import { lightTheme, darkTheme } from "@/global/styles/theme";
import React from "react";

import {
  DarkThemePaletteContainer,
  LightThemePaletteContainer,
  Palette,
} from "./styled";
import { capitalize } from "@/utils/string";
import { copyToClipboard } from "@/utils/navigator";
import { REGEX_NUMBER, REGEX_WORD } from "@/utils/regex";

interface Palette {
  [key: string]: string;
}

export const ColorPalette = () => {
  const lightThemeMap = React.useMemo(() => {
    const _lightThemeMap = new Map<string, Palette[]>();
    Object.entries(lightTheme).map(([key, value]) => {
      const [mapKey] = key.match(REGEX_WORD) ?? [];
      const [mapKeyNum] = key.match(REGEX_NUMBER) ?? [];
      if (mapKey && _lightThemeMap.get(mapKey)) {
        _lightThemeMap.set(mapKey, [
          ...(_lightThemeMap.get(mapKey) ?? []),
          {
            [`${mapKey}-${mapKeyNum}`]: value,
          },
        ]);
      } else if (mapKey) {
        _lightThemeMap.set(mapKey, [
          {
            [`${mapKey}-${mapKeyNum}`]: value,
          },
        ]);
      }
    });

    return _lightThemeMap;
  }, []);

  const darkThemeMap = React.useMemo(() => {
    const _darkThemeMap = new Map<string, Palette[]>();
    Object.entries(darkTheme).map(([key, value]) => {
      const [mapKey] = key.match(REGEX_WORD) ?? [];
      const [mapKeyNum] = key.match(REGEX_NUMBER) ?? [];
      if (mapKey && _darkThemeMap.get(mapKey)) {
        _darkThemeMap.set(mapKey, [
          ...(_darkThemeMap.get(mapKey) ?? []),
          {
            [`${mapKey}-${mapKeyNum}`]: value,
          },
        ]);
      } else if (mapKey) {
        _darkThemeMap.set(mapKey, [
          {
            [`${mapKey}-${mapKeyNum}`]: value,
          },
        ]);
      }
    });
    return _darkThemeMap;
  }, []);

  return (
    <div>
      <h2>LightTheme Palette</h2>
      <LightThemePaletteContainer>
        {lightThemeMap &&
          Array.from(lightThemeMap).map((palette) => {
            const [key, value] = palette;
            return (
              <div key={key}>
                <h3>{capitalize(key)}</h3>
                {value.map((color, index) => {
                  return (
                    <div key={`${key}-${index}`}>
                      {Object.entries(color).map(([key, value]) => {
                        return (
                          <Palette
                            bg={value}
                            key={key}
                            index={index}
                            onClick={() => copyToClipboard(value)}
                          >
                            <span>--{key}</span>
                            <span className={"hex"}>{value}</span>
                          </Palette>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            );
          })}
      </LightThemePaletteContainer>
      <br />
      <h2>DarkTheme Palette</h2>
      <DarkThemePaletteContainer>
        {darkThemeMap &&
          Array.from(darkThemeMap).map((palette, index) => {
            const [key, value] = palette;
            return (
              <div key={key}>
                <h3>{capitalize(key)}</h3>
                {value.map((color, index) => {
                  return (
                    <div key={`${key}-${index}`}>
                      {Object.entries(color).map(([key, value]) => {
                        return (
                          <Palette
                            bg={value}
                            key={key}
                            index={9 - index}
                            onClick={() => copyToClipboard(value)}
                          >
                            <span>--{key}</span>
                            <span className={"hex"}>{value}</span>
                          </Palette>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            );
          })}
      </DarkThemePaletteContainer>
    </div>
  );
};
