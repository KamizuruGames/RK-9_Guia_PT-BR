/* SCRIPT BY SHINO */
/* Usable Sysbols ◎●←↑→↓↖↗↘↙ */

const Vec3 = require('tera-vec3');
const mapID = [9735, 9935];						// MAP ID to input [ Normal Mode , Hard Mode ]
const HuntingZn = [735, 935]; 					// Add in your own Hunting Zone [ Normal Mode , Hard Mode ] 
const BossID = [1000, 2000, 3000]; 				// Add in Boss Template ID [ 1st boss , 2nd Boss, 3rd Boss ]
												// Leave value at 0 if you do not require Hardmode/1st Boss/2nd Boss
												// Ex. [735, 0] [0, 0, 3000];

const FirstBossActions = {						// First Boss Attack Actions Input here with desired call out Messages
	1189020954: {msg: 'INVOCACAO'},		// Actions placed here are universal and will be called out disregard to your class or job
	1189020760: {msg: 'ATAQUE ATRAS'},
	1189021759: {msg: 'ATAQUE ATRAS'},
	1189021760: {msg: 'ATAQUE ATRAS'},
	1189020759: {msg: 'ATAQUE ATRAS'},
	1189020952: {msg: 'FORA'},
	1189020953: {msg: 'DENTRO'},
	1189020756: {msg: 'FORA'},
	1189021756: {msg: 'FORA'},
	1189020957: {msg: 'FOGUETES!'},
	1189020955: {msg: 'PUXAO'},
};

const FirstBossActionsTank = {					// First Boss Actions call out for TANKS
	1189020752: {msg: 'ESQUIVE DO STUN'},			// Actions will only be called out if you have TANK MODE Enabled
	1189021752: {msg: 'ESQUIVE DO STUN'},
};

const SecondBossActions = {						// Second Boss Attack Actions
	1189020952: {msg: 'FORA'},
};

const SecondBossActionsTank = {					// Second Boss Actions for TANKS
	1189020750: {msg: 'ESQUIVA FRENTE'},
	1189021750: {msg: 'ESQUIVA FRENTE'},
};

const ThirdBossActions = {						// Third Boss Attack Actions
	1189020969: {msg: 'ESCUDO!'},
	1189020972: {msg: 'FORA'},
	1189020764: {msg: 'DIREITA'},
	1189021764: {msg: 'DIREITA'},
	1189020767: {msg: 'DIREITA'},
	1189021767: {msg: 'DIREITA'},
	1189020765: {msg: 'ESQUERDA'},
	1189021765: {msg: 'ESQUERDA'},
	1189020766: {msg: 'ESQUERDA'},
	1189021766: {msg: 'ESQUERDA'},
};

const ThirdBossActionsTank = {					// Third Boss Actions for TANKS

};

//FOR HARD MODE INPUT BELOW HERE//

const FirstBossActionsHM = {
	1202128154: {msg: 'INVOCACAO'},
	1202127960: {msg: 'ATAQUE ATRAS'},
	1202128960: {msg: 'ATAQUE ATRAS'},
	1202127959: {msg: 'ATAQUE ATRAS'},
	1202128959: {msg: 'ATAQUE ATRAS'},
	1202128152: {msg: 'FORA'},
	1202128153: {msg: 'DENTRO'},
	1202127956: {msg: 'FORA'},
	1202128956: {msg: 'FORA'},
	1202128157: {msg: 'FOGUETES!'},
	1202128155: {msg: 'PUXAO'},
	1202128053: {msg: 'VENTILADOR'},
	1202128167: {msg: 'SEGURO FRENTE DIREITA'},
	1202128163: {msg: 'SEGURO FRENTE DIREITA'},
	1202129167: {msg: 'SEGURO FRENTE DIREITA'},
	1202129163: {msg: 'SEGURO FRENTE DIREITA'},
	1202128174: {msg: 'SEGURO FRENTE ESQUERDA'},
	1202128162: {msg: 'SEGURO FRENTE ESQUERDA'},
	1202129174: {msg: 'SEGURO FRENTE ESQUERDA'},
	1202129162: {msg: 'SEGURO FRENTE ESQUERDA'},
	1202128172: {msg: 'SEGURO ATRAS DIREITA'},
	1202129172: {msg: 'SEGURO ATRAS DIREITA'},
	1202128160: {msg: 'SEGURO ATRAS DIREITA'},
	1202129160: {msg: 'SEGURO ATRAS DIREITA'}, 
	1202128159: {msg: 'SEGURO FRENTE DIREITA'},
	1202129159: {msg: 'SEGURO FRENTE DIREITA'},
	1202128171: {msg: 'SEGURO FRENTE DIREITA'},
	1202129171: {msg: 'SEGURO FRENTE DIREITA'},
	1202128173: {msg: 'SEGURO ATRAS ESQUERDA'},
	1202129173: {msg: 'SEGURO ATRAS ESQUERDA'},
	1202128165: {msg: 'SEGURO ATRAS ESQUERDA'},
	1202129165: {msg: 'SEGURO ATRAS ESQUERDA'},
	1202128166: {msg: 'SEGURO FRENTE ESQUERDA'},
	1202129166: {msg: 'SEGURO FRENTE ESQUERDA'},
	1202128170: {msg: 'SEGURO FRENTE ESQUERDA'},
	1202129170: {msg: 'SEGURO FRENTE ESQUERDA'},
	1202128169: {msg: 'SEGURO ATRAS ESQUERDA'},
	1202129169: {msg: 'SEGURO ATRAS ESQUERDA'},
	1202128161: {msg: 'SEGURO ATRAS ESQUERDA'},
	1202129161: {msg: 'SEGURO ATRAS ESQUERDA'},
	1202128164: {msg: 'SEGURO ATRAS DIREITA'},
	1202129164: {msg: 'SEGURO ATRAS DIREITA'},
	1202128168: {msg: 'SEGURO ATRAS DIREITA'},
	1202129168: {msg: 'SEGURO ATRAS DIREITA'},	
};

const FirstBossActionsTankHM = {
	1202127952: {msg: 'ESQUIVE DO STUN'},
	1202128952: {msg: 'ESQUIVE DO STUN'},
};

const SecondBossActionsHM = {
	1202128152: {msg: 'FORA'},
};

const SecondBossActionsTankHM = {
	
};

const ThirdBossActionsHM = {
	1202128169: {msg: 'ESCUDO!'},
	1202128172: {msg: 'FORA'},
	1202127964: {msg: 'DIREITA'},
	1202128964: {msg: 'DIREITA'},
	1202127967: {msg: 'DIREITA'},
	1202128967: {msg: 'DIREITA'},
	1202127965: {msg: 'ESQUERDA'},
	1202128965: {msg: 'ESQUERDA'},
	1202127966: {msg: 'ESQUERDA'},
	1202128966: {msg: 'ESQUERDA'},
	//1202128153: {msg: 'ACAO'},
};

const ThirdBossActionsTankHM = {
	
};

module.exports = function rk9guide(dispatch) {
	const command = dispatch.command || dispatch.require.command;
	let firstskill = 0,
		secondskill = 0,
		tempskill = 0,
		isInv = 0,
		uid = 999999999,
		time = 1000,
	    timer = 0,
		secondcounter = 0,
		cid,
		name,
		boss,
		bosshp,
		model,
		zone,
		mode,
		dungeonmsg,
		job = -1,
		whichboss = 0,
		whichmode = 0,
		//kr = true,
		isTank = false,
		warned = false,
		checklastboss = true,
		insidezone = false,
		insidemap = false,
		sendToParty = false,
		lastbosstoparty = false,
		enabled = true,
	   	streamenabled = false,
	   	shieldwarning,
	   	bossCurLocation,
		itemhelper = true;
		
	// DO NOT EDIT IF UN-SURE
	dispatch.hook('S_LOAD_TOPO', 3, (event) => {				// Welcome Message upon entering dungeon
        zone = event.zone;										// Edit Message if neccessary
	clearTimeout(shieldwarning);
		if (zone === mapID[0]) {								
			insidemap = true;
			whichmode = 1; //1 = NM
			dungeonmode();
			initialize();
			command.message('<br> Bem-vindo ao modo normal RK-9 <br> Digite !help para mais informacoes <br>');
			return;
			} else if (zone === mapID[1]) {
			insidemap = true;
			whichmode = 2; //2 = HM
			dungeonmode();
			initialize();
			command.message('<br> Bem-vindo ao RK-9 Hard Mode <br> Digite !help para mais informacoes <br>');
			return;
			} else insidemap = false;
    });
	
	dispatch.hook('S_LOGIN', dispatch.majorPatchVersion >= 86 ? 14 : 13, (event) => {
		cid = event.gameId;
		model = event.templateId;
		name = event.name;
		job = model % 100
		//if(kr === null) kr = (dispatch.base.majorPatchVersion < 74) ? false : true;
		if (job === 2 || job === 11) isTank = true;				// Check if class = Lancer / Brawler
		else isTank = false;
		setTimeout(function(){
			if (zone === mapID[0]) {								
			insidemap = true;
			whichmode = 1; //1 = NM
			dungeonmode();
			initialize();
			command.message('<br> Bem-vindo ao modo normal RK-9 <br> Digite !help para mais informacoes <br>');
			return;
			} else if (zone === mapID[1]) {
			insidemap = true;
			whichmode = 2; //2 = HM
			dungeonmode();
			initialize();
			command.message('<br> Bem-vindo ao RK-9 Hard Mode <br> Digite !help para mais informacoes <br>');
			return;
			} else insidemap = false;
		}, 15000);
	});
	
	//For Inputting commands, Toggle functions ETC 
	command.add('rk9', () => {
		if(!insidemap) { command.message('Você deve estar dentro da RK-9'); return; }
		enabled = !enabled;
		command.message('RK-9 Guia '+(enabled ? 'Ativado' : 'Desativado') + '.');
	});
	
	command.add('party', () => {
		if(!insidemap) { command.message('Você deve estar dentro da RK-9'); return; }
		sendToParty = !sendToParty;
		command.message((sendToParty ? 'As mensagens serao enviadas para a party' : 'Somente você vera mensagens'));
	});
	
	command.add('stream', () => {
		if(!insidemap) { command.message('Você deve estar dentro da RK-9'); return; }
		streamenabled = !streamenabled;
		command.message((streamenabled ? 'Stream mode Ativado' : 'Stream mode Desativado'));
	});
	
	command.add('lastbosstoparty', () => {
		if(!insidemap) { command.message('Você deve estar dentro da RK-9'); return; }
		lastbosstoparty = !lastbosstoparty;
		command.message((lastbosstoparty ? 'As mensagens serao enviadas para a party' : 'Somente você vera mensagens'));
	});
	
	command.add('itemhelper', () => {
		if(!insidemap) { command.message('Você deve estar dentro da RK-9'); return; }
		itemhelper = !itemhelper;
		command.message('Item helper spawn ' + (itemhelper ? 'Ativado' : 'Desativado') + '.');
	});
	
	command.add('tank', () => {
		if(!insidemap) { command.message('Você deve estar dentro da RK-9'); return; }
		isTank = !isTank;
		command.message('Tank Mode ' + (isTank ? 'Ativado' : 'Desativado') + '.');
	});
	
	command.add('info', () => {
		if(!insidemap) { command.message('Você deve estar dentro da RK-9'); return; }
		command.message(mode);
		command.message('RK9 Guia: ' + enabled);
		command.message('Party Notice: ' + sendToParty);
		command.message('Lastboss to party notice: ' + lastbosstoparty);
		command.message('Item helper: ' + itemhelper);
		command.message('Tank Mode: ' + isTank);
		command.message('Stream mode: ' + streamenabled);
	});
	
	command.add('help', () => {
		if(!insidemap) { command.message('Você deve estar dentro da RK-9'); return; }
		command.message('!rk9 Para Ativar ou Desativar');
		command.message('!party Alterar Exibicao para os membros da party');
		command.message('!lastbosstoparty Alterar Exibicao dos padroes do Boss');
		command.message('!itemhelper Alterar Exibicao de Itens no chao');
		command.message('!info Exibir os modulos ligados ou desligados');
		command.message('!tank Alterar Exibicao do modo Tank');
		command.message('!stream Alterar Exibicao do modo Stream');
	});
	
	command.add('debug', () => {
		if(!insidemap) { command.message('Você deve estar dentro do RK-9'); return; }
		command.message('InsideZone: ' + insidezone);
		command.message('InsideMap: ' + insidemap);
		command.message('Whichmode: ' + whichmode);
		command.message('WhichBoss: ' + whichboss);
		command.message('IsInv: ' + isInv);
		command.message('Itemhelper: ' + itemhelper);
		//command.message('KR: ' + kr);
	});
		
	// NEED MORE TESTING 
	// FOR WARRIOR / ZERK TANK MODE
	/*dispatch.hook('S_ABNORMALITY_BEGIN', 2, (event) => {
		if (!enabled) return;
		if(job === 1 || job === 2 || job === 4 || job === 11) {
		if(event.id === 100200 || event.id === 100202 || event.id === 100203) {
			isTank = true;
			command.message('Tank Mode: ' + isTank);
		}
		}
	});
	dispatch.hook('S_ABNORMALITY_END', 1, event => {
		if (!enabled) return;
		if(job === 1 || job === 2 || job === 4 || job === 11) {
		if(event.id === 100200 || event.id === 100202 || event.id === 100203) {
			isTank = false;
			command.message('Tank Mode: ' + isTank);
		}
		}
	});*/
	
	dispatch.hook('S_SPAWN_NPC', dispatch.majorPatchVersion >= 79 ? 11 : 10, (event) => {
		if(!enabled) return;
		if(!itemhelper || streamenabled) return;
		if(insidemap && insidezone) {
			if(whichmode === 1 && whichboss === 2) {
				if(event.templateId === 2007) {
					timer = 5000;
					secondbossorbs(event, timer);
				}
			} else if (whichmode === 2 && whichboss === 2) {
				if(event.templateId === 2007) {
					if(secondcounter === 0) {
						timer = 12000;
						secondbossorbs(event, timer);
						secondcounter++;
						setTimeout(function(){
							secondcounter = 0;
						}, 15000);
					} else if (secondcounter === 1) {
						timer = 8000;
						secondbossorbs(event, timer);
						secondcounter++;
					} else if (secondcounter === 2) {
						timer = 4000;
						secondbossorbs(event, timer);
						secondcounter = 0;
					}
				}
			}
		}
	})
	
	dispatch.hook('S_BOSS_GAGE_INFO', 3, (event) => {					// DO NOT EDIT IF UN-SURE
		if (!enabled) return;
		if(event.curHp == event.maxHp) {
			initialize();	
		}
		if(whichboss) {
		if (boss - event.id != 0)
		{
			whichboss = 0;
			warned = false;
			clearTimeout(shieldwarning);
			return;
		}
		}
		if(event.huntingZoneId === HuntingZn[0]) {
			whichmode = 1; //NM
			insidezone = true;
			if(event.templateId === BossID[0]) {
				whichboss = 1;
				boss = event.id;
				return;
			} else if(event.templateId === BossID[1]) {
				whichboss = 2;
				boss = event.id;
				return;
			} else if(event.templateId === BossID[2]) {
				whichboss = 3;
				boss = event.id;
				return;
			} else return false;
		} else if(event.huntingZoneId === HuntingZn[1]) {
			whichmode = 2; //HM
			insidezone = true;
			if(event.templateId === BossID[0]) {
				whichboss = 1;
				boss = event.id;
				return;
			} else if(event.templateId === BossID[1]) {
				whichboss = 2;
				boss = event.id;
				return;
			} else if(event.templateId === BossID[2]) {
				whichboss = 3;
				boss = event.id;
				/*if(bosshp <= 0.70 && !warned) {
					warned = true;
					sendMessage('Boss 70%');
				}*/
				return;
			} else return false;
		} else insidezone = false;
		})
	 
	 	dispatch.hook('S_DUNGEON_EVENT_MESSAGE', 2, (event) => {	
		if (!enabled || whichboss === 0) return;
		let msgId = parseInt(event.message.replace('@dungeon:', ''));
		if(msgId === 9935311) { //STANDARD
			firstskill = tempskill;
			secondskill = 0;
			//sendMessage ('Next: ' + firstskill + ' + ' + secondskill); 
		} else if (msgId === 9935312) { //REVERSE
			secondskill = tempskill;
			firstskill = 0;
			//sendMessage ('Next: ' + firstskill + ' + ' + secondskill); 
		}
		if(!checklastboss) return;
		if (msgId === 9935302) {
			firstskill = 'FORA';
			tempskill = 'FORA';
			checklastboss = false;
			if(lastbosstoparty) {setTimeout(function(){dispatch.toServer('C_CHAT', 1, {channel: 21, message: 'FORA' });}, 3000); }
		} else if (msgId === 9935303) {
			firstskill = 'DENTRO';
			tempskill = 'DENTRO';
			checklastboss = false;
			if(lastbosstoparty) { setTimeout(function(){dispatch.toServer('C_CHAT', 1, {channel: 21, message: 'DENTRO' });}, 3000); }
		} else if (msgId === 9935304) {
			firstskill = 'ONDA';
			tempskill = 'ONDA';
			checklastboss = false;
			if(lastbosstoparty) {setTimeout(function(){dispatch.toServer('C_CHAT', 1, {channel: 21, message: 'ONDA' });}, 3000); }
		}
	})
	
	 dispatch.hook('S_QUEST_BALLOON', 1, (event) => {
		if(!enabled) return;
		if(insidezone && insidemap) {
			dungeonmsg = parseInt(event.message.replace('@monsterBehavior:', ''));
			if ( firstskill === 0 ) { //REVERSE
				if(dungeonmsg === 935301) {
					firstskill = 'FORA';
					tempskill = 'FORA';
					sendMessage(firstskill + ' + ' + secondskill);
					secondskill = tempskill;
					firstskill = 0;
					if(lastbosstoparty) {setTimeout(function(){dispatch.toServer('C_CHAT', 1, {channel: 21, message: 'FORA' });}, 8000); }
				} else if(dungeonmsg === 935302) {
					firstskill = 'DENTRO';
					tempskill = 'DENTRO';
					sendMessage(firstskill + ' + ' + secondskill);
					secondskill = tempskill;
					firstskill = 0;
					if(lastbosstoparty) { setTimeout(function(){dispatch.toServer('C_CHAT', 1, {channel: 21, message: 'DENTRO' });}, 8000); }
				} else if(dungeonmsg === 935303) {
					firstskill = 'ONDA';
					tempskill = 'ONDA';
					sendMessage(firstskill + ' + ' + secondskill);
					secondskill = tempskill;
					firstskill = 0;
					if(lastbosstoparty) {setTimeout(function(){dispatch.toServer('C_CHAT', 1, {channel: 21, message: 'ONDA' });}, 8000); }
				}	
			} else if ( secondskill === 0 ) { //STANDARD
				if(dungeonmsg === 935301) {
					secondskill = 'FORA';
					tempskill = 'FORA';
					sendMessage(firstskill + ' + ' + secondskill);
					firstskill = tempskill;
					secondskill = 0;
					if(lastbosstoparty) {setTimeout(function(){dispatch.toServer('C_CHAT', 1, {channel: 21, message: 'FORA' });}, 8000); }
				} else if(dungeonmsg === 935302) {
					secondskill = 'DENTRO';
					tempskill = 'DENTRO';
					sendMessage(firstskill + ' + ' + secondskill);
					firstskill = tempskill;
					secondskill = 0;
					if(lastbosstoparty) { setTimeout(function(){dispatch.toServer('C_CHAT', 1, {channel: 21, message: 'DENTRO' });}, 8000); }
				} else if(dungeonmsg === 935303) {
					secondskill = 'ONDA';
					tempskill = 'ONDA';
					sendMessage(firstskill + ' + ' + secondskill);
					firstskill = tempskill;
					secondskill = 0;
					if(lastbosstoparty) {setTimeout(function(){dispatch.toServer('C_CHAT', 1, {channel: 21, message: 'ONDA' });}, 8000); }
				}
			}
			return;
		}
		return;
	 });
	 
	 function newtoold(obj = {}) {
        if(typeof obj === 'number') obj = {type: 1, id: obj}

		const hasHuntingZone = Boolean(obj.npc) && obj.type == 1

		let raw = (Number(obj.id) || 0) & (hasHuntingZone ? 0xffff : 0x3ffffff)
		if(hasHuntingZone) raw |= (obj.huntingZoneId & 0x3ff) << 16
		raw |= (obj.type & 0xf) << 26
		raw |= (obj.npc & 1) << 30
		raw |= (obj.reserved & 1) << 31

		return raw
	}
	 
	 dispatch.hook('S_ACTION_STAGE', 9, (event) => {								// DO NOT EDIT IF UN-SURE
		 if(!enabled) return;																								// Main script for calling out attacks
		 if(insidezone && insidemap) {
			bossCurLocation = {x: event.loc.x,y: event.loc.y,z: event.loc.z,w: event.w};
			let skillid = newtoold(event.skill); // there, fixed the guide :ok_hand:
			//let skillid = event.skill;
			/*if(kr && whichmode === 1) {
					if(event.skill.id - 352 >= 1000)	skillid = "118902" + (event.skill.id - 352);
					else skillid = "1189020" + (event.skill.id - 352);
			}
			if(kr && whichmode === 2) {
			if(event.skill.id + 6848 >= 1000)	skillid = "120212" + (event.skill.id + 6848);
				else skillid = "1202120" + (event.skill.id + 6848);
			}*/
			if(event.stage === 0) {
			if(whichmode === 1) {
				if(whichboss === 1) {
						if (FirstBossActions[skillid]) {
							sendMessage(FirstBossActions[skillid].msg);
						}
						if(isTank)
						{
							if (FirstBossActionsTank[skillid]) {
							sendMessage(FirstBossActionsTank[skillid].msg);
							}
						}
						if(skillid == 1189020957)
						{
							setTimeout(function(){
							sendMessage('PULE!');
						}, 12000); }
				} else if (whichboss === 2) {
						if (SecondBossActions[skillid]) {
							sendMessage(SecondBossActions[skillid].msg);
						}
						if(isTank)
						{
							if (SecondBossActionsTank[skillid]) {
							sendMessage(SecondBossActionsTank[skillid].msg);
							}
						}
				} else if (whichboss === 3) {
						if (ThirdBossActions[skillid]) {
							sendMessage(ThirdBossActions[skillid].msg);
						}
						if(isTank)
						{
							if (ThirdBossActionsTank[skillid]) {
							sendMessage(ThirdBossActionsTank[skillid].msg);
							}
						}
						if(skillid == 1189020969) {
							shieldwarning = setTimeout(function(){
							sendMessage('ESCUDO EM 10SEC');
							}, 100000);
						}
						if(itemhelper && !streamenabled) {
						if(skillid == 1189020764 || skillid == 1189021764 || skillid == 1189020767 || skillid == 1189021767) {
							Spawnitem(476, 3000, 190,200);
							Spawnitem(476, 3000, 10,200);
						} else if (skillid == 1189020765 || skillid == 1189021765 || skillid == 1189020766 || skillid == 1189021766) {
							Spawnitem(476, 3000, 170, 200);
							Spawnitem(476, 3000, 350, 200);
						} else if(skillid == 1202127964 || skillid == 1202128964 || skillid == 1202127967 || skillid == 1202128967) {
							Spawnitem(476, 3000, 190,200);
							Spawnitem(476, 3000, 10,200);
						} else if (skillid == 1202127965 || skillid == 1202128965 || skillid == 1202127966 || skillid == 1202128966) {
							Spawnitem(476, 3000, 170, 200);
							Spawnitem(476, 3000, 350, 200);
						}
						}
			} else return;
		} else if (whichmode === 2) { //HARD MODE
			if(whichboss === 1) {
					if (FirstBossActionsHM[skillid]) {
						sendMessage(FirstBossActionsHM[skillid].msg);
					}
					if(isTank)
					{
						if (FirstBossActionsTankHM[skillid]) {
						sendMessage(FirstBossActionsTankHM[skillid].msg);
						}
					}
					if(skillid == 1202128157)
					{
					setTimeout(function(){
						sendMessage('PULE!');
					}, 12000); }
			} else if (whichboss === 2) {
					if (SecondBossActionsHM[skillid]) {
						sendMessage(SecondBossActionsHM[skillid].msg);
					}
					if(isTank)
					{
						if (SecondBossActionsTankHM[skillid]) {
						sendMessage(SecondBossActionsTankHM[skillid].msg);
						}
					}
			} else if (whichboss === 3) {
					if (ThirdBossActionsHM[skillid]) {
						sendMessage(ThirdBossActionsHM[skillid].msg);
					}
					if(isTank)
					{
						if (ThirdBossActionsTankHM[skillid]) {
						sendMessage(ThirdBossActionsTankHM[skillid].msg);
						}
					}
					if(skillid == 1202128169) {
						shieldwarning = setTimeout(function(){
						sendMessage('ESCUDO VINDO EM 10SEC');
						}, 105000);
					}
					if(itemhelper && !streamenabled) {
					if(skillid == 1189020764 || skillid == 1189021764 || skillid == 1189020767 || skillid == 1189021767) {
						Spawnitem(476, 3000, 190,200);
						Spawnitem(476, 3000, 10,200);
					} else if (skillid == 1189020765 || skillid == 1189021765 || skillid == 1189020766 || skillid == 1189021766) {
						Spawnitem(476, 3000, 170, 200);
						Spawnitem(476, 3000, 350, 200);
					} else if(skillid == 1202127964 || skillid == 1202128964 || skillid == 1202127967 || skillid == 1202128967) {
						Spawnitem(476, 3000, 190,200);
						Spawnitem(476, 3000, 10,200);
					} else if (skillid == 1202127965 || skillid == 1202128965 || skillid == 1202127966 || skillid == 1202128966) {
						Spawnitem(476, 3000, 170, 200);
						Spawnitem(476, 3000, 350, 200);
					}
					if(skillid == 1202128153) {
						Spawnitem(553, 7000, 20, 300);
						Spawnitem(553, 7000, 40, 300);
						Spawnitem(553, 7000, 60, 300);
						Spawnitem(553, 7000, 80, 300);
						Spawnitem(553, 7000, 100, 300);
						Spawnitem(553, 7000, 120, 300);
						Spawnitem(553, 7000, 140, 300);
						Spawnitem(553, 7000, 160, 300);
						Spawnitem(553, 7000, 180, 300);
						Spawnitem(553, 7000, 200, 300);
						Spawnitem(553, 7000, 220, 300);
						Spawnitem(553, 7000, 240, 300);
						Spawnitem(553, 7000, 260, 300);
						Spawnitem(553, 7000, 280, 300);
						Spawnitem(553, 7000, 300, 300);
						Spawnitem(553, 7000, 320, 300);
						Spawnitem(553, 7000, 340, 300);
						Spawnitem(553, 7000, 360, 300);
						setTimeout(function(){
						//sendMessage('Next: '  + firstskill + ' + ' + secondskill);
						}, 5500);
					}
					}
			} else return;
		}
		} else if (event.stage === 3) {
			if(whichmode != 0 && whichboss === 3 && itemhelper && !streamenabled) {
				if(skillid == 1189020764 || skillid == 1189021764 || skillid == 1189020767 || skillid == 1189021767) {
					Spawnitem(553, 3000, 190,210);
					Spawnitem(553, 3000, 190,230);
					Spawnitem(553, 3000, 190,250);
					Spawnitem(553, 3000, 190,270);
					Spawnitem(553, 3000, 190,290);
					Spawnitem(553, 3000, 200,210);
					Spawnitem(553, 3000, 210,220);
					Spawnitem(553, 3000, 220,230);
					Spawnitem(553, 3000, 230,240);
					Spawnitem(553, 3000, 240,250);
					Spawnitem(553, 3000, 10,210);
					Spawnitem(553, 3000, 10,230);
					Spawnitem(553, 3000, 10,250);
					Spawnitem(553, 3000, 10,270);
					Spawnitem(553, 3000, 10,290);
					Spawnitem(553, 3000, 20,210);
					Spawnitem(553, 3000, 30,220);
					Spawnitem(553, 3000, 40,230);
					Spawnitem(553, 3000, 50,240);
					Spawnitem(553, 3000, 60,250);
				} else if (skillid == 1189020765 || skillid == 1189021765 || skillid == 1189020766 || skillid == 1189021766) {
					Spawnitem(553, 3000, 170, 210);
					Spawnitem(553, 3000, 170, 230);
					Spawnitem(553, 3000, 170, 250);
					Spawnitem(553, 3000, 170, 270);
					Spawnitem(553, 3000, 170, 290);
					Spawnitem(553, 3000, 160, 210);
					Spawnitem(553, 3000, 150, 220);
					Spawnitem(553, 3000, 140, 230);
					Spawnitem(553, 3000, 130, 240);
					Spawnitem(553, 3000, 120, 250);
					Spawnitem(553, 3000, 350, 210);
					Spawnitem(553, 3000, 350, 230);
					Spawnitem(553, 3000, 350, 250);
					Spawnitem(553, 3000, 350, 270);
					Spawnitem(553, 3000, 350, 290);
					Spawnitem(553, 3000, 340, 210);
					Spawnitem(553, 3000, 330, 220);
					Spawnitem(553, 3000, 320, 230);
					Spawnitem(553, 3000, 310, 240);
					Spawnitem(553, 3000, 300, 250);
				} else if(skillid == 1202127964 || skillid == 1202128964 || skillid == 1202127967 || skillid == 1202128967) {
					Spawnitem(553, 3000, 190,210);
					Spawnitem(553, 3000, 190,230);
					Spawnitem(553, 3000, 190,250);
					Spawnitem(553, 3000, 190,270);
					Spawnitem(553, 3000, 190,290);
					Spawnitem(553, 3000, 200,210);
					Spawnitem(553, 3000, 210,220);
					Spawnitem(553, 3000, 220,230);
					Spawnitem(553, 3000, 230,240);
					Spawnitem(553, 3000, 240,250);
					Spawnitem(553, 3000, 10,210);
					Spawnitem(553, 3000, 10,230);
					Spawnitem(553, 3000, 10,250);
					Spawnitem(553, 3000, 10,270);
					Spawnitem(553, 3000, 10,290);
					Spawnitem(553, 3000, 20,210);
					Spawnitem(553, 3000, 30,220);
					Spawnitem(553, 3000, 40,230);
					Spawnitem(553, 3000, 50,240);
					Spawnitem(553, 3000, 60,250);
				} else if (skillid == 1202127965 || skillid == 1202128965 || skillid == 1202127966 || skillid == 1202128966) {
					Spawnitem(553, 3000, 170, 210);
					Spawnitem(553, 3000, 170, 230);
					Spawnitem(553, 3000, 170, 250);
					Spawnitem(553, 3000, 170, 270);
					Spawnitem(553, 3000, 170, 290);
					Spawnitem(553, 3000, 160, 210);
					Spawnitem(553, 3000, 150, 220);
					Spawnitem(553, 3000, 140, 230);
					Spawnitem(553, 3000, 130, 240);
					Spawnitem(553, 3000, 120, 250);
					Spawnitem(553, 3000, 350, 210);
					Spawnitem(553, 3000, 350, 230);
					Spawnitem(553, 3000, 350, 250);
					Spawnitem(553, 3000, 350, 270);
					Spawnitem(553, 3000, 350, 290);
					Spawnitem(553, 3000, 340, 210);
					Spawnitem(553, 3000, 330, 220);
					Spawnitem(553, 3000, 320, 230);
					Spawnitem(553, 3000, 310, 240);
					Spawnitem(553, 3000, 300, 250);
				}
			}
		} else if (event.stage === 1) {
			if(whichmode === 2 && whichboss === 1 && itemhelper && !streamenabled) {
					if(skillid == 1202128167) { //SEGURO FRENTE DIREITA
						Spawnitem(476, 9000, 338,120);
					} else if (skillid == 1202128163) { //SEGURO FRENTE DIREITA														
						Spawnitem(476, 9000, 338,120);
					} else if (skillid == 1202129167) { //SEGURO FRENTE DIREITA
						Spawnitem(476, 9000, 338,120);
					} else if (skillid == 1202129163) { //SEGURO FRENTE DIREITA
						Spawnitem(476, 9000, 338,120);
					} else if (skillid == 1202128174) { //SEGURO FRENTE ESQUERDA
						Spawnitem(476, 9000, 23,120);
					} else if (skillid == 1202128162) { //SEGURO FRENTE ESQUERDA
						Spawnitem(476, 9000, 23,120);
					} else if (skillid == 1202129174) { //SEGURO FRENTE ESQUERDA
						Spawnitem(476, 9000, 23,120);
					} else if (skillid == 1202129162) { //SEGURO FRENTE ESQUERDA
						Spawnitem(476, 9000, 23,120);
					} else if (skillid == 1202128172) { //SEGURO ATRAS DIREITA
						Spawnitem(476, 9000, 248,120);
					} else if (skillid == 1202129172) { //SEGURO ATRAS DIREITA
						Spawnitem(476, 9000, 248,120);
					} else if (skillid == 1202128160) { //SEGURO ATRAS DIREITA
						Spawnitem(476, 9000, 248,120);
					} else if (skillid == 1202129160) { //SEGURO ATRAS DIREITA
						Spawnitem(476, 9000, 248,120);
					} else if (skillid == 1202128159) { //SEGURO FRENTE DIREITA
						Spawnitem(476, 9000, 293,120);
					} else if (skillid == 1202129159) { //SEGURO FRENTE DIREITA
						Spawnitem(476, 9000, 293,120);
					} else if (skillid == 1202128171) { //SEGURO FRENTE DIREITA
						Spawnitem(476, 9000, 293,120);
					} else if (skillid == 1202129171) { //SEGURO FRENTE DIREITA
						Spawnitem(476, 9000, 293,120);
					} else if (skillid == 1202128173) { //SEGURO ATRAS ESQUERDA
						Spawnitem(476, 9000, 113,120);
					} else if (skillid == 1202129173) { //SEGURO ATRAS ESQUERDA
						Spawnitem(476, 9000, 113,120);
					} else if (skillid == 1202128165) { //SEGURO ATRAS ESQUERDA
						Spawnitem(476, 9000, 113,120);
					} else if (skillid == 1202129165) { //SEGURO ATRAS ESQUERDA
						Spawnitem(476, 9000, 113,120);
					} else if (skillid == 1202128166) { //SEGURO FRENTE ESQUERDA
						Spawnitem(476, 9000, 68,120);
					} else if (skillid == 1202129166) { //SEGURO FRENTE ESQUERDA
						Spawnitem(476, 9000, 68,120);	
					} else if (skillid == 1202128170) { //SEGURO FRENTE ESQUERDA
						Spawnitem(476, 9000, 68,120);
					} else if (skillid == 1202129170) { //SEGURO FRENTE ESQUERDA
						Spawnitem(476, 9000, 68,120);	
					} else if (skillid == 1202128169) { //SEGURO ATRAS ESQUERDA
						Spawnitem(476, 9000, 158,120);
					} else if (skillid == 1202129169) { //SEGURO ATRAS ESQUERDA
						Spawnitem(476, 9000, 158,120);
					} else if (skillid == 1202128161) { //SEGURO ATRAS ESQUERDA
						Spawnitem(476, 9000, 158,120);
					} else if (skillid == 1202129161) { //SEGURO ATRAS ESQUERDA
						Spawnitem(476, 9000, 158,120);
					} else if (skillid == 1202128164) { //SEGURO ATRAS DIREITA
						Spawnitem(476, 9000, 203,120);
					} else if (skillid == 1202129164) { //SEGURO ATRAS DIREITA
						Spawnitem(476, 9000, 203,120);
					} else if (skillid == 1202128168) { //SEGURO ATRAS DIREITA
						Spawnitem(476, 9000, 203,120);
					} else if (skillid == 1202129168) { //SEGURO ATRAS DIREITA
						Spawnitem(476, 9000, 203,120);
					}
			}
			}
		 }
});

	 function sendMessage(msg) {
			if (sendToParty) {
			dispatch.toServer('C_CHAT', 1, {
				channel: 21, //21 = p-notice, 1 = party, 2 = guild
				message: msg
			});
		} else if(streamenabled) {
			command.message(msg);
		} else {
			dispatch.toClient('S_CHAT', 3, {
				channel: 21, //21 = p-notice, 1 = party
				name: 'DG-Guide',
				message: msg
			});
		}
	
	}

	function dungeonmode() {
		if(whichmode === 1) mode = 'NORMAL MODE'
		else if(whichmode === 2) mode = 'HARD MODE'
	}
	
	function initialize() {
		secondcounter = 0;
		firstskill = 0;
		secondskill = 0;
		tempskill = 0;
		isInv = 0;
		warned = false,
		checklastboss = true;
		clearTimeout(shieldwarning);
	}		
	
	function spawn2(item, time, degrees, radius, loca) {
		let r = null, rads = null, finalrad = null, spawnx = null, spawny = null, pos = null;
		r = loca.w;
		rads = (degrees * Math.PI/180);
		finalrad = r - rads;
		spawnx = loca.loc.x + radius * Math.cos(finalrad);
		spawny = loca.loc.y + radius * Math.sin(finalrad);
		pos = {x:spawnx,y:spawny};
		
		dispatch.toClient('S_SPAWN_COLLECTION', 4, {
			gameId : uid,
			id : item,
			amount : 1,
			loc : new Vec3(pos.x,pos.y,loca.loc.z),
			w : r,
			unk1 : 0,
			unk2 : 0
		});
		setTimeout(Despawn, time,uid)
		uid--;
	}
	
	function Spawnitem(item, time, degrees, radius) {
		let r = null, rads = null, finalrad = null, spawnx = null, spawny = null, pos = null;
		r = bossCurLocation.w;
		rads = (degrees * Math.PI/180);
		finalrad = r - rads;
		spawnx = bossCurLocation.x + radius * Math.cos(finalrad);
		spawny = bossCurLocation.y + radius * Math.sin(finalrad);
		pos = {x:spawnx,y:spawny};
		
		dispatch.toClient('S_SPAWN_COLLECTION', 4, {
			gameId : uid,
			id : item,
			amount : 1,
			loc : new Vec3(pos.x,pos.y,bossCurLocation.z),
			w : r,
			unk1 : 0,
			unk2 : 0
		});
		setTimeout(Despawn, time,uid)
		uid--;
	}
	
	function secondbossorbs(pos, timer){
		spawn2(537, timer, 0, 25, pos);
		//spawn2(537, timer, 0, 50, pos);
		spawn2(537, timer, 0, 75, pos);
		//spawn2(537, timer, 0, 100, pos);
		spawn2(537, timer, 0, 125, pos);
		//spawn2(537, timer, 0, 150, pos);
		spawn2(537, timer, 0, 175, pos);
		//spawn2(537, timer, 0, 200, pos);
		spawn2(537, timer, 0, 225, pos);
		//spawn2(537, timer, 0, 250, pos);
		spawn2(537, timer, 0, 275, pos);
		//spawn2(537, timer, 0, 300, pos);
		spawn2(537, timer, 0, 325, pos);
		//spawn2(537, timer, 0, 350, pos);
		spawn2(537, timer, 0, 375, pos);
		//spawn2(537, timer, 0, 400, pos);
		spawn2(537, timer, 0, 425, pos);
		//spawn2(537, timer, 0, 450, pos);
		spawn2(537, timer, 0, 475, pos);
		//spawn2(537, timer, 0, 500, pos);
		spawn2(537, timer, 90, 25, pos);
		//spawn2(537, timer, 90, 50, pos);
		spawn2(537, timer, 90, 75, pos);
		//spawn2(537, timer, 90, 100, pos);
		spawn2(537, timer, 90, 125, pos);
		//spawn2(537, timer, 90, 150, pos);
		spawn2(537, timer, 90, 175, pos);
		//spawn2(537, timer, 90, 200, pos);
		spawn2(537, timer, 90, 225, pos);
		//spawn2(537, timer, 90, 250, pos);
		spawn2(537, timer, 90, 275, pos);
		//spawn2(537, timer, 90, 300, pos);
		spawn2(537, timer, 90, 325, pos);
		//spawn2(537, timer, 90, 350, pos);
		spawn2(537, timer, 90, 375, pos);
		//spawn2(537, timer, 90, 400, pos);
		spawn2(537, timer, 90, 425, pos);
		//spawn2(537, timer, 90, 450, pos);
		spawn2(537, timer, 90, 475, pos);
		//spawn2(537, timer, 90, 500, pos);
		spawn2(537, timer, 180, 25, pos);
		//spawn2(537, timer, 180, 50, pos);
		spawn2(537, timer, 180, 75, pos);
		//spawn2(537, timer, 180, 100, pos);
		spawn2(537, timer, 180, 125, pos);
		//spawn2(537, timer, 180, 150, pos);
		spawn2(537, timer, 180, 175, pos);
		//spawn2(537, timer, 180, 200, pos);
		spawn2(537, timer, 180, 225, pos);
		//spawn2(537, timer, 180, 250, pos);
		spawn2(537, timer, 180, 275, pos);
		//spawn2(537, timer, 180, 300, pos);
		spawn2(537, timer, 180, 325, pos);
		//spawn2(537, timer, 180, 350, pos);
		spawn2(537, timer, 180, 375, pos);
		//spawn2(537, timer, 180, 400, pos);
		spawn2(537, timer, 180, 425, pos);
		//spawn2(537, timer, 180, 450, pos);
		spawn2(537, timer, 180, 475, pos);
		//spawn2(537, timer, 180, 500, pos);
		spawn2(537, timer, 270, 25, pos);
		//spawn2(537, timer, 270, 50, pos);
		spawn2(537, timer, 270, 75, pos);
		//spawn2(537, timer, 270, 100, pos);
		spawn2(537, timer, 270, 125, pos);
		//spawn2(537, timer, 270, 150, pos);
		spawn2(537, timer, 270, 175, pos);
		//spawn2(537, timer, 270, 200, pos);
		spawn2(537, timer, 270, 225, pos);
		//spawn2(537, timer, 270, 250, pos);
		spawn2(537, timer, 270, 275, pos);
		//spawn2(537, timer, 270, 300, pos);
		spawn2(537, timer, 270, 325, pos);
		//spawn2(537, timer, 270, 350, pos);
		spawn2(537, timer, 270, 375, pos);
		//spawn2(537, timer, 270, 400, pos);
		spawn2(537, timer, 270, 425, pos);
		//spawn2(537, timer, 270, 450, pos);
		spawn2(537, timer, 270, 475, pos);
		//spawn2(537, timer, 270, 500, pos);
	}
	
	function Despawn(uid){
	dispatch.toClient('S_DESPAWN_COLLECTION', 2, {
			gameId : uid,
			collected : 0
		});
	}
	
	dispatch.hook('S_CHAT', 3, event =>
	{
		if(insidezone && insidemap && event.channel === 21 && event.gameId != cid)
		{
			event.channel = 1
			return true
		}
	})
	dispatch.hook('C_ASK_INTERACTIVE', 2, event =>
	{
		if(event.name === 'DG-Guide') return false
	})
}
