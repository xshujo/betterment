import React from "react";
import { Circle, G, Path, Svg } from "react-native-svg";
import { Colors } from "../constants/Colors";

export function GoBackIcon() {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill={Colors.accent2}
      xmlns="http://www.w3.org/2000/svg">
      <G id="goback">
        <G>
          <Path d="M12.181,0.293c-2.667,2.667-5.333,5.333-8,8c-0.385,0.385-0.385,1.029,0,1.414c2.667,2.667,5.333,5.333,8,8
			c0.913,0.913,2.327-0.501,1.414-1.414c-2.667-2.667-5.333-5.333-8-8c0,0.471,0,0.943,0,1.414c2.667-2.667,5.333-5.333,8-8
			C14.508,0.794,13.094-0.62,12.181,0.293L12.181,0.293z"/>
        </G>
      </G>
    </Svg>
  );
}

export function SettingsIcon() {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill={Colors.accent2}
      xmlns="http://www.w3.org/2000/svg">
      <G id="settings">
        <Path d="M14.474,9c0-0.493-0.088-0.962-0.213-1.415l2.475-1.43l-1.333-2.311l-2.46,1.421c-0.666-0.679-1.52-1.164-2.469-1.41V1
		H7.808v2.855c-0.949,0.246-1.803,0.731-2.469,1.41l-2.46-1.421L1.546,6.155l2.475,1.43C3.896,8.038,3.808,8.507,3.808,9
		s0.088,0.962,0.213,1.415l-2.475,1.43l1.333,2.311l2.46-1.421c0.666,0.68,1.52,1.164,2.469,1.41V17h2.666v-2.855
		c0.949-0.246,1.803-0.73,2.469-1.41l2.46,1.421l1.333-2.311l-2.475-1.43C14.386,9.962,14.474,9.493,14.474,9z M9.141,11.667
		c-1.473,0-2.667-1.194-2.667-2.667s1.194-2.667,2.667-2.667S11.808,7.527,11.808,9S10.613,11.667,9.141,11.667z"/>
        <G>
          <Path d="M15.474,9c-0.052-0.629-0.112-1.066-0.249-1.681c-0.152,0.376-0.306,0.752-0.459,1.129
			c0.824-0.477,1.649-0.953,2.475-1.43c0.474-0.273,0.63-0.898,0.358-1.368c-0.444-0.77-0.889-1.54-1.333-2.311
			c-0.273-0.473-0.898-0.63-1.368-0.358c-0.819,0.474-1.64,0.947-2.46,1.421c0.404,0.052,0.808,0.104,1.212,0.156
			c-0.931-0.787-1.761-1.26-2.91-1.667c0.245,0.321,0.489,0.643,0.734,0.964c0-0.952,0-1.904,0-2.855c0-0.545-0.455-1-1-1
			C9.585,0,8.696,0,7.808,0c-0.545,0-1,0.455-1,1c0,0.952,0,1.904,0,2.855c0.245-0.321,0.489-0.643,0.734-0.964
			c-1.149,0.408-1.979,0.881-2.91,1.667c0.404-0.052,0.808-0.104,1.212-0.156c-0.82-0.474-1.64-0.947-2.46-1.421
			C2.914,2.71,2.289,2.867,2.016,3.34C1.571,4.11,1.127,4.88,0.683,5.65c-0.271,0.47-0.115,1.095,0.358,1.368
			c0.825,0.477,1.65,0.953,2.475,1.43C3.363,8.072,3.209,7.696,3.056,7.319c-0.259,1.169-0.259,2.192,0,3.361
			c0.153-0.376,0.307-0.752,0.459-1.129c-0.825,0.477-1.649,0.953-2.475,1.43c-0.473,0.273-0.63,0.897-0.358,1.368
			c0.444,0.77,0.889,1.54,1.333,2.311c0.273,0.474,0.898,0.63,1.368,0.358c0.82-0.474,1.64-0.947,2.46-1.421
			c-0.404-0.052-0.808-0.104-1.212-0.156c0.931,0.787,1.761,1.26,2.91,1.667c-0.245-0.321-0.49-0.643-0.734-0.964
			c0,0.952,0,1.903,0,2.855c0,0.545,0.455,1,1,1c0.889,0,1.777,0,2.666,0c0.545,0,1-0.455,1-1c0-0.952,0-1.903,0-2.855
			c-0.245,0.321-0.489,0.643-0.734,0.964c1.149-0.407,1.979-0.88,2.91-1.667c-0.404,0.052-0.808,0.104-1.212,0.156
			c0.82,0.474,1.641,0.947,2.46,1.421c0.47,0.271,1.095,0.115,1.368-0.358c0.444-0.771,0.889-1.541,1.333-2.311
			c0.271-0.471,0.115-1.095-0.358-1.368c-0.825-0.477-1.65-0.953-2.475-1.43c0.153,0.376,0.307,0.753,0.459,1.129
			C15.361,10.065,15.422,9.629,15.474,9c0.106-1.286-1.895-1.276-2,0c-0.059,0.383-0.118,0.766-0.177,1.149
			c-0.098,0.438,0.057,0.896,0.459,1.129c0.825,0.477,1.65,0.953,2.475,1.43c-0.119-0.456-0.239-0.912-0.358-1.368
			c-0.444,0.771-0.889,1.541-1.333,2.311c0.456-0.119,0.912-0.239,1.368-0.358c-0.82-0.474-1.641-0.947-2.46-1.421
			c-0.415-0.239-0.863-0.139-1.212,0.156c-0.676,0.384-1.352,0.769-2.027,1.153c-0.424,0.149-0.734,0.494-0.734,0.964
			c0,0.952,0,1.903,0,2.855c0.333-0.333,0.667-0.667,1-1c-0.889,0-1.777,0-2.666,0c0.333,0.333,0.667,0.667,1,1
			c0-0.952,0-1.903,0-2.855c0-0.47-0.31-0.814-0.734-0.964c-0.676-0.385-1.352-0.77-2.027-1.153
			c-0.349-0.295-0.797-0.396-1.212-0.156c-0.82,0.474-1.64,0.947-2.46,1.421c0.456,0.119,0.912,0.239,1.368,0.358
			c-0.444-0.77-0.889-1.54-1.333-2.311c-0.12,0.456-0.239,0.912-0.358,1.368c0.825-0.477,1.649-0.953,2.475-1.43
			c0.402-0.232,0.557-0.69,0.459-1.129c-0.236-0.766-0.236-1.533,0-2.299c0.097-0.439-0.057-0.896-0.459-1.129
			C3.7,6.245,2.875,5.769,2.051,5.292C2.17,5.748,2.29,6.204,2.409,6.66C2.854,5.89,3.298,5.12,3.742,4.35
			C3.286,4.469,2.83,4.588,2.374,4.708c0.82,0.474,1.64,0.947,2.46,1.421c0.415,0.24,0.863,0.138,1.212-0.156
			C6.722,5.588,7.397,5.204,8.073,4.82c0.424-0.15,0.734-0.495,0.734-0.964c0-0.952,0-1.904,0-2.855c-0.333,0.333-0.667,0.667-1,1
			c0.889,0,1.777,0,2.666,0c-0.333-0.333-0.667-0.667-1-1c0,0.952,0,1.904,0,2.855c0,0.469,0.311,0.814,0.734,0.964
			c0.676,0.384,1.352,0.769,2.027,1.153c0.349,0.294,0.797,0.396,1.212,0.156c0.819-0.474,1.64-0.947,2.46-1.421
			c-0.456-0.12-0.912-0.239-1.368-0.358c0.444,0.77,0.889,1.54,1.333,2.311c0.119-0.456,0.239-0.912,0.358-1.368
			c-0.824,0.477-1.649,0.953-2.475,1.43c-0.402,0.232-0.557,0.69-0.459,1.129C13.355,8.234,13.415,8.617,13.474,9
			C13.579,10.276,15.58,10.286,15.474,9z"/>
          <Path d="M9.141,10.667c-2.15-0.116-2.15-3.218,0-3.334C11.292,7.217,11.28,10.552,9.141,10.667c-1.283,0.069-1.29,2.069,0,2
			c2.072-0.111,3.556-1.595,3.667-3.667c0.111-2.068-1.763-3.564-3.667-3.667C7.073,5.222,5.576,7.095,5.474,9
			c-0.111,2.067,1.762,3.564,3.667,3.667C10.43,12.736,10.423,10.736,9.141,10.667z"/>
        </G>
      </G>
    </Svg>
  );
}

export function HomeIcon({ fill }) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G id="home">
        <G>
          <Path
            fill={fill} // Fill color based on prop
            d="M1.505,7.529c2.217-1.57,4.434-3.14,6.65-4.71c0.393-0.278,0.786-0.556,1.179-0.834c0.278-0.197-1.261-0.42-0.466,0.143
      c1.296,0.918,2.592,1.836,3.888,2.754C13.878,5.676,15,6.471,16.122,7.266C16.951,7.853,16,6.495,16,6.854
      c0,0.596,0,1.192,0,1.789c0,2.786,0,5.571,0,8.357c0.333-0.333,0.667-0.667,1-1c-2,0-4,0-6,0c0.333,0.333,0.667,0.667,1,1
      c0-2,0-4,0-6c0-0.545-0.455-1-1-1c-1.333,0-2.667,0-4,0c-0.545,0-1,0.455-1,1c0,2,0,4,0,6c0.333-0.333,0.667-0.667,1-1
      c-2,0-4,0-6,0c0.333,0.333,0.667,0.667,1,1c0-3.444,0-6.89,0-10.334c0-1.29-2-1.29-2,0C0,10.11,0,13.556,0,17c0,0.545,0.455,1,1,1
      c2,0,4,0,6,0c0.545,0,1-0.455,1-1c0-2,0-4,0-6c-0.333,0.333-0.667,0.667-1,1c1.333,0,2.667,0,4,0c-0.333-0.333-0.667-0.667-1-1
      c0,2,0,4,0,6c0,0.545,0.455,1,1,1c2,0,4,0,6,0c0.545,0,1-0.455,1-1c0-1.825,0-3.651,0-5.477c0-1.546,0.379-3.614-0.036-5.123
      c-0.316-1.15-2.821-2.271-3.681-2.88c-1.593-1.128-3.186-2.256-4.778-3.384c-0.267-0.189-0.743-0.189-1.01,0
      c-2.667,1.889-5.333,3.777-8,5.666C-0.548,6.542,0.45,8.277,1.505,7.529z"/>
        </G>
      </G>
    </Svg>
  );
}

export function DiaryIcon({ fill }) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G id="diary">
        <G>
          <Path
            fill={fill} // Fill color based on prop
            d="M2.189,1c0,0.667,0,1.333,0,2c0.333-0.333,0.667-0.667,1-1c-0.333,0-0.667,0-1,0c-1.29,0-1.29,2,0,2
          c0.333,0,0.667,0,1,0c-0.333-0.333-0.667-0.667-1-1c0,1.333,0,2.667,0,4c0.333-0.333,0.667-0.667,1-1c-0.333,0-0.667,0-1,0
          c-1.29,0-1.29,2,0,2c0.333,0,0.667,0,1,0c-0.333-0.333-0.667-0.667-1-1c0,1.333,0,2.667,0,4c0.333-0.333,0.667-0.667,1-1
          c-0.333,0-0.667,0-1,0c-1.29,0-1.29,2,0,2c0.333,0,0.667,0,1,0c-0.333-0.333-0.667-0.667-1-1c0,1.333,0,2.667,0,4
          c0.333-0.333,0.667-0.667,1-1c-0.333,0-0.667,0-1,0c-1.29,0-1.29,2,0,2c0.333,0,0.667,0,1,0c-0.333-0.333-0.667-0.667-1-1
          c0,0.667,0,1.333,0,2c0,0.545,0.455,1,1,1c4,0,8,0,12,0c0.545,0,1-0.455,1-1c0-5.333,0-10.667,0-16c0-0.545-0.455-1-1-1
          c-4,0-8,0-12,0c-1.29,0-1.29,2,0,2c4,0,8,0,12,0c-0.333-0.333-0.667-0.667-1-1c0,5.333,0,10.667,0,16
          c0.333-0.333,0.667-0.667,1-1c-4,0-8,0-12,0c0.333,0.333,0.667,0.667,1,1c0-0.667,0-1.333,0-2c0-0.545-0.455-1-1-1
          c-0.333,0-0.667,0-1,0c-1.29,0-1.29,2,0,2c0.333,0,0.667,0,1,0c0.545,0,1-0.455,1-1c0-1.333,0-2.667,0-4c0-0.545-0.455-1-1-1
          c-0.333,0-0.667,0-1,0c-1.29,0-1.29,2,0,2c0.333,0,0.667,0,1,0c0.545,0,1-0.455,1-1c0-1.333,0-2.667,0-4
          c0-0.545-0.455-1-1-1c-0.333,0-0.667,0-1,0c-1.29,0-1.29,2,0,2c0.333,0,0.667,0,1,0c0.545,0,1-0.455,1-1
          c0-1.333,0-2.667,0-4c0-0.545-0.455-1-1-1c-0.333,0-0.667,0-1,0c-1.29,0-1.29,2,0,2c0.333,0,0.667,0,1,0
          c0.545,0,1-0.455,1-1c0-0.667,0-1.333,0-2C4.189-0.29,2.189-0.29,2.189,1z"/>
        </G>
        <Path
          fill={fill} // Fill color based on prop
          d="M13.189,4.438c-2.667,0-5.333,0-8,0c-1.29,0-1.29,2,0,2c2.667,0,5.333,0,8,0
        C14.479,6.438,14.479,4.438,13.189,4.438c-2.667,0-5.333,0-8,0c-1.29,0-1.29,2,0,2c2.667,0,5.333,0,8,0
        C14.479,6.438,14.479,4.438,13.189,4.438z"/>
      </G>
    </Svg>
  );
}

export function AddIcon({ }) {
  return (
    <Svg
      width={34}
      height={34}
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G>
        <Circle cx="17" cy="17" r="16" fill={Colors.secondary} />
      </G>
      <G>
        <G>
          <G>
            <Path
              fill="#FFFFFF" // Fill color based on prop
              d="M16,12c0,3.333,0,6.667,0,10c0,1.29,2,1.29,2,0c0-3.333,0-6.667,0-10C18,10.71,16,10.71,16,12L16,12z" />
          </G>
        </G>
      </G>
      <G>
        <G>
          <G>
            <Path
              fill="#FFFFFF" // Fill color based on prop
              d="M22,16c-3.333,0-6.667,0-10,0c-1.29,0-1.29,2,0,2c3.333,0,6.667,0,10,0C23.29,18,23.29,16,22,16L22,16z" />
          </G>
        </G>
      </G>
    </Svg>
  );
}

export function LogIcon({ fill }) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G>
        <Path
          fill={fill} // Fill color based on prop
          d="M17,15c-5.333,0-10.667,0-16,0c0.333,0.333,0.667,0.667,1,1c0-4.667,0-9.333,0-14
          C1.667,2.333,1.333,2.667,1,3c5.333,0,10.667,0,16,0c-0.333-0.333-0.667-0.667-1-1c0,4.667,0,9.333,0,14c0,1.29,2,1.29,2,0
          c0-4.667,0-9.333,0-14c0-0.545-0.455-1-1-1C11.667,1,6.333,1,1,1C0.455,1,0,1.455,0,2c0,4.667,0,9.333,0,14c0,0.545,0.455,1,1,1
          c5.333,0,10.667,0,16,0C18.29,17,18.29,15,17,15z"
        />
      </G>
      <G>
        <Path
          fill={fill} // Fill color based on prop
          d="M3,7c0,2,0,4,0,6c0,1.29,2,1.29,2,0c0-2,0-4,0-6C5,5.71,3,5.71,3,7L3,7z"
        />
      </G>
      <G>
        <Path
          fill={fill} // Fill color based on prop
          d="M6.333,5c0,2.667,0,5.333,0,8c0,1.29,2,1.29,2,0c0-2.667,0-5.333,0-8C8.333,3.71,6.333,3.71,6.333,5
          L6.333,5z"
        />
      </G>
      <G>
        <Path
          fill={fill} // Fill color based on prop
          d="M13,9c0,1.333,0,2.667,0,4c0,1.29,2,1.29,2,0c0-1.333,0-2.667,0-4C15,7.71,13,7.71,13,9L13,9z"
        />
      </G>
      <G>
        <Path
          fill={fill} // Fill color based on prop
          d="M9.667,7c0,2,0,4,0,6c0,1.29,2,1.29,2,0c0-2,0-4,0-6C11.667,5.71,9.667,5.71,9.667,7L9.667,7z"
        />
      </G>
    </Svg>
  );
}

export function ProfileIcon({ fill }) {
  return (
    <Svg
      width={18}
      height={18}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <G id="profile">
        <G>
          <Path
            fill={fill} // Fill color based on prop
            d="M9,8c2.261-0.122,3.878-1.739,4-4c0.121-2.256-1.922-3.888-4-4C6.744-0.122,5.112,1.922,5,4
            C4.878,6.256,6.922,7.888,9,8c1.289,0.069,1.282-1.931,0-2C6.421,5.861,6.421,2.139,9,2c2.58-0.139,2.566,3.862,0,4
            C7.717,6.069,7.71,8.069,9,8z"
          />
        </G>
        <G>
          <Path
            fill={fill} // Fill color based on prop
            d="M9,8c-5.095,0.274-8.726,3.905-9,9c-0.029,0.545,0.477,1,1,1c5.333,0,10.667,0,16,0
            c0.522,0,1.029-0.455,1-1C17.726,11.905,14.095,8.274,9,8c-1.29-0.069-1.283,1.931,0,2c3.967,0.214,6.786,3.033,7,7
            c0.333-0.333,0.667-0.667,1-1c-5.333,0-10.667,0-16,0c0.333,0.333,0.667,0.667,1,1c0.214-3.967,3.033-6.786,7-7
            C10.282,9.931,10.289,7.931,9,8z"
          />
        </G>
      </G>
    </Svg>
  );
}