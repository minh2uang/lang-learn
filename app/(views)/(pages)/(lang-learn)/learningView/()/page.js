'use client';
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const usePhake_1 = __importDefault(require("./usePhake"));
const material_1 = require("@mui/material");
const TcSelectField_1 = __importDefault(require("@repo/shared-stuff/forms/TcSelectField"));
const Phake = () => {
    const { onClickSet, onClickEdit, onClickAddSet, sets, setGroups, setGroup, setSetGroup, filteredSets } = (0, usePhake_1.default)();
    return (<>
      <material_1.Button onClick={onClickAddSet}>Add Set</material_1.Button>
      {sets && (<TcSelectField_1.default options={setGroups} label={'Group'} onChange={setSetGroup} value={setGroup}></TcSelectField_1.default>)}
      <material_1.Box mb={1}/>
      {filteredSets &&
            filteredSets.map((set) => (<material_1.Grid container key={set._id.toString()} alignItems={'center'}>
            <material_1.Grid item xs={10}>
              <material_1.Card sx={{ mb: 2 }}>
                <material_1.CardActionArea onClick={() => onClickSet(set._id.toString())}>
                  <material_1.CardHeader title={set.name} subheader={set.description}/>
                </material_1.CardActionArea>
              </material_1.Card>
            </material_1.Grid>
            <material_1.Grid item xs={2}>
              <material_1.Button fullWidth onClick={() => onClickEdit(set._id.toString())}>
                Edit
              </material_1.Button>
            </material_1.Grid>
          </material_1.Grid>))}
    </>);
};
exports.default = Phake;
