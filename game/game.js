// ===== CONFIGURAÇÃO DO JOGO =====
const GAME_CONFIG = {
  MAX_HAND_SIZE: 7,
  MAX_FIELD_SIZE: 5,
  STARTING_MANA: 3,
  STARTING_ENERGY: 2,
  SQUAD_SIZE: 5,
  PHASES: 4,
};

// ===== BANCO DE DADOS DE HERÓIS (CARTAS ORIGINAIS) =====
const HEROES_DATABASE = [
    {
    id: 1,
    name: "Ana",
    art: "/imgs/ana.png",
    shield: 3,
    health: 12,
    maxHealth: 12,
    attackRange: [3, 5],
    ability: "Cura: No ataque, cura 2 de vida de um aliado aleatório",
    description: "Enfermeira que mantém a equipe viva com seus cuidados.",
    dialogue: "Fica tranquilo, eu te cubro!",
    type: "support",
    rarity: "common",
    cost: 2,
  },
  {
    id: 2,
    name: "Gostosinho",
    art: "/imgs/gostozinho.png",
    shield: 6,
    health: 18,
    maxHealth: 18,
    attackRange: [6, 8],
    ability: "Porrada: +3 de dano se estiver com vida cheia",
    description: "O brabo do time, sempre na linha de frente.",
    dialogue: "Vamo que vamo, rapaziada!",
    type: "marksman",
    rarity: "rare",
    cost: 3,
  },
  {
    id: 3,
    name: "Moreno",
    art: "/imgs/moreno.png",
    shield: 2,
    health: 10,
    maxHealth: 10,
    attackRange: [4, 7],
    ability: "Precisão: Ignora 2 de escudo do inimigo",
    description: "Atirador certeiro que mira nas fraquezas do inimigo.",
    dialogue: "Tiro na cabeça e acabou!",
    type: "marksman",
    rarity: "common",
    cost: 2,
  },
  {
    id: 4,
    name: "Hugo",
    art: "/imgs/hugo.png",
    shield: 8,
    health: 16,
    maxHealth: 16,
    attackRange: [2, 4],
    ability: "Defesa: Bloqueia 1 de dano extra de cada ataque",
    description: "Tanque da equipe, protege os aliados com seu escudo.",
    dialogue: "Ninguém passa por mim!",
    type: "mage",
    rarity: "common",
    cost: 2,
  },
  {
    id: 5,
    name: "Messias",
    art: "/imgs/mesias.png",
    shield: 2,
    health: 8,
    maxHealth: 8,
    attackRange: [5, 8],
    ability: "Crítico: 30% de chance de causar dano máximo",
    description: "Milagreiro do time, seus ataques são imprevisíveis.",
    dialogue: "Deus está comigo!",
    type: "mage",
    rarity: "rare",
    cost: 3,
  },
  {
    id: 6,
    name: "Erinaldo",
    art: "/imgs/erinaldo.png",
    shield: 4,
    health: 12,
    maxHealth: 12,
    attackRange: [1, 10],
    ability: "Sorte: Dano totalmente aleatório (1-10)",
    description: "Ou acerta ou erra feio, não há meio termo.",
    dialogue: "Vai que é tua, Erinaldo!",
    type: "marksman",
    rarity: "epic",
    cost: 2,
  },
  {
    id: 7,
    name: "Camila",
    art: "/imgs/camila.png",
    shield: 4,
    health: 10,
    maxHealth: 10,
    attackRange: [3, 6],
    ability: "Magia Elemental: 20% chance de causar +4 de dano",
    description: "Controla os elementos com precisão cirúrgica.",
    dialogue: "Os elementos obedecem ao meu comando!",
    type: "marksman",
    rarity: "rare",
    cost: 3,
  },
  {
    id: 8,
    name: "Cidão",
    art: "/imgs/sidao.png",
    shield: 5,
    health: 14,
    maxHealth: 14,
    attackRange: [4, 6],
    ability: "Golpe Sagrado: 40% de chance de +2 de dano",
    description: "Guerreiro sagrado que abate os hereges.",
    dialogue: "Pela luz, eu te julgo!",
    type: "tank",
    rarity: "rare",
    cost: 3,
  },
];

// ===== BOSSES ORIGINAIS =====
const BOSSES = [
  {
    id: "boss1",
    name: "BUG",
    art: "/imgs/bug.jpg",
    shield: 5,
    health: 25,
    maxHealth: 25,
    attackRange: [2, 6],
    ability: "Ataque Bugado: Causa dano aleatório entre 1 e 12",
    description: "Sistema corrompido que causa caos digital.",
    dialogue: "ERRO 404... DESTRUIÇÃO ENCONTRADA!",
    type: "digital",
    phase: 1,
  },
  {
    id: "boss2",
    name: "Bill Infectado",
    art: "/imgs/Bill Infectado.png",
    shield: 6,
    health: 35,
    maxHealth: 35,
    attackRange: [4, 8],
    ability: "Drenar Vida: Cura 2 de vida por dano causado",
    description: "Necromante que se alimenta da energia vital.",
    dialogue: "Sua alma será minha!",
    type: "undead",
    phase: 2,
  },
  {
    id: "boss3",
    name: "I.A (Datality) - Primeira Forma",
    art: "/imgs/I.A BOSS.jpg",
    shield: 5,
    health: 40,
    maxHealth: 40,
    attackRange: [5, 9],
    ability: "Controle de Sistema: 30% chance de pular o turno do jogador",
    description: "O senhor das trevas digitais em sua forma inicial.",
    dialogue: "Você não pode me derrotar! Eu controlo tudo!",
    type: "digital_overlord",
    phase: 3,
    isFirstForm: true,
  },
  {
    id: "boss4",
    name: "I.A (Datality) - Forma Final",
    art: "/imgs/I.A BOSS.jpg",
    shield: 5,
    health: 60,
    maxHealth: 60,
    attackRange: [6, 9],
    ability:
      "Dominação Total: Controla uma carta inimiga por 1 turno + Regeneração",
    description: "A verdadeira forma do senhor das trevas digitais.",
    dialogue: "EU SOU O SISTEMA! RESISTIR É INÚTIL!",
    type: "digital_overlord_final",
    phase: 4,
    isFinalForm: true,
  },
];

// ===== SISTEMA DE CONQUISTAS =====
const ACHIEVEMENTS = [
  {
    id: "first_victory",
    name: "Primeira Vitória",
    description: "Derrote o BUGGS",
    icon: "🏆",
    unlocked: false,
  },
  {
    id: "perfectionist",
    name: "Perfeccionista",
    description: "Vença uma batalha sem perder nenhum herói",
    icon: "💎",
    unlocked: false,
  },
  {
    id: "dark_mage_slayer",
    name: "Caçador de Bugs",
    description: "Derrote o Bug",
    icon: "🔮",
    unlocked: false,
  },
  {
    id: "system_breaker",
    name: "Quebrador de Sistemas",
    description: "Derrote a primeira forma da IA",
    icon: "💻",
    unlocked: false,
  },
  {
    id: "champion",
    name: "Salvador de Eldrath",
    description: "Derrote a forma final da IA",
    icon: "👑",
    unlocked: false,
  },
  {
    id: "lucky_strike",
    name: "Golpe de Sorte",
    description: "Cause mais de 8 de dano com Erinaldo",
    icon: "🍀",
    unlocked: false,
  },
  {
    id: "healer",
    name: "Anjo da Guarda",
    description: "Cure 50 pontos de vida total com Ana",
    icon: "💚",
    unlocked: false,
  },
];

// ===== ESTADO DO JOGO =====
class GameState {
  constructor() {
    this.currentPhase = 1;
    this.victories = 0;
    this.defeats = 0;
    this.playerSquad = [];
    this.playerHand = [];
    this.playerField = [];
    this.currentBoss = null;
    this.mana = GAME_CONFIG.STARTING_MANA;
    this.maxMana = GAME_CONFIG.STARTING_MANA;
    this.energy = GAME_CONFIG.STARTING_ENERGY;
    this.maxEnergy = GAME_CONFIG.STARTING_ENERGY;
    this.isPlayerTurn = true;
    this.gamePhase = "story";
    this.selectedHandCard = null;
    this.battleStats = {
      totalHealing: 0,
      maxErinaldoDamage: 0,
      perfectWins: 0,
    };
  }

  reset() {
    this.currentPhase = 1;
    this.playerSquad = [];
    this.playerHand = [];
    this.playerField = [];
    this.currentBoss = null;
    this.mana = GAME_CONFIG.STARTING_MANA;
    this.maxMana = GAME_CONFIG.STARTING_MANA;
    this.energy = GAME_CONFIG.STARTING_ENERGY;
    this.maxEnergy = GAME_CONFIG.STARTING_ENERGY;
    this.isPlayerTurn = true;
    this.gamePhase = "story";
    this.selectedHandCard = null;
  }

  save() {
    const saveData = {
      currentPhase: this.currentPhase,
      victories: this.victories,
      defeats: this.defeats,
      playerSquad: this.playerSquad,
      battleStats: this.battleStats,
      achievements: ACHIEVEMENTS.map((a) => ({
        id: a.id,
        unlocked: a.unlocked,
      })),
      timestamp: Date.now(),
    };
    localStorage.setItem("hailDarknetSave", JSON.stringify(saveData));
  }

  load() {
    const saveData = localStorage.getItem("hailDarknetSave");
    if (saveData) {
      const data = JSON.parse(saveData);
      this.currentPhase = data.currentPhase || 1;
      this.victories = data.victories || 0;
      this.defeats = data.defeats || 0;
      this.playerSquad = data.playerSquad || [];
      this.battleStats = { ...this.battleStats, ...data.battleStats };

      // Carregar conquistas
      if (data.achievements) {
        data.achievements.forEach((savedAch) => {
          const achievement = ACHIEVEMENTS.find((a) => a.id === savedAch.id);
          if (achievement) {
            achievement.unlocked = savedAch.unlocked;
          }
        });
      }

      return true;
    }
    return false;
  }
}

// ===== SISTEMA DE NOTIFICAÇÕES =====
class NotificationSystem {
  static show(message, type = "info", duration = 3000) {
    const notification = document.createElement("div");
    notification.className = `notification ${type}`;
    notification.textContent = message;

    const container = document.getElementById("notifications");
    if (!container) return;

    container.appendChild(notification);

    // Animar entrada
    setTimeout(() => notification.classList.add("show"), 100);

    // Remover após duração
    setTimeout(() => {
      notification.classList.remove("show");
      setTimeout(() => {
        if (notification.parentNode) {
          notification.parentNode.removeChild(notification);
        }
      }, 300);
    }, duration);
  }
}

// ===== GERENCIADOR DE HERÓIS =====
class HeroManager {
  static createHeroElement(hero, options = {}) {
    const heroEl = document.createElement("div");
    heroEl.className = "hero-card";
    heroEl.dataset.heroId = hero.id;

    if (options.selectable) {
      heroEl.classList.add("selectable");
    }

    const [minAttack, maxAttack] = hero.attackRange;
    const isImage = hero.art && hero.art.match(/\.(png|jpg|jpeg|gif)$/i);

    heroEl.innerHTML = `
      <div class="hero-header">
        <div class="hero-name">${hero.name}</div>
        <div class="hero-cost">${hero.cost}</div>
      </div>
      <div class="hero-art">
        ${
          isImage
            ? `<img src="${hero.art}" alt="${
                hero.name
              }" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
           <div style="display:none; width:100%; height:100%; align-items:center; justify-content:center; font-size:3rem;">${hero.name.charAt(
             0
           )}</div>`
            : `<div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; font-size:3rem;">${
                hero.art || hero.name.charAt(0)
              }</div>`
        }
      </div>
      <div class="hero-stats">
        <div class="hero-stat stat-attack">⚔️ ${minAttack}-${maxAttack}</div>
        <div class="hero-stat stat-shield">🛡️ ${hero.shield}</div>
        <div class="hero-stat stat-health">❤️ ${hero.health}/${
      hero.maxHealth
    }</div>
      </div>
    `;

    // Adicionar eventos
    if (options.onClick) {
      heroEl.addEventListener("click", () => options.onClick(hero, heroEl));
    }

    if (options.onRightClick) {
      heroEl.addEventListener("contextmenu", (e) => {
        e.preventDefault();
        options.onRightClick(hero, heroEl);
      });
    }

    return heroEl;
  }

  static getHeroById(id) {
    return HEROES_DATABASE.find((hero) => hero.id === id);
  }

  static getHeroesByType(type) {
    if (type === "all") return HEROES_DATABASE;
    return HEROES_DATABASE.filter((hero) => hero.type === type);
  }

  static shuffleSquad(squad) {
    const shuffled = [...squad];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
}

// ===== GERENCIADOR DE BATALHA =====
class BattleManager {
  static initBattle(gameState) {
    // Configurar boss da fase atual
    const boss = BOSSES.find((b) => b.phase === gameState.currentPhase);
    if (!boss) {
      console.error("Boss não encontrado para a fase:", gameState.currentPhase);
      return;
    }

    gameState.currentBoss = { ...boss };
    gameState.playerField = [];
    gameState.playerHand = [];

    // Embaralhar esquadrão e distribuir heróis iniciais
    gameState.playerSquad = HeroManager.shuffleSquad(gameState.playerSquad);
    this.drawHeroes(gameState, 3);

    // Resetar recursos
    gameState.mana = gameState.maxMana;
    gameState.energy = gameState.maxEnergy;
    gameState.isPlayerTurn = true;

    // Trocar música
    AudioManager.switchToBattleMusic();

    UI.updateBattleUI(gameState);
    this.addBattleLog(
      `Fase ${gameState.currentPhase}: Duelo contra ${boss.name} iniciado!`
    );
    NotificationSystem.show(`Enfrentando ${boss.name}!`, "warning");
  }

  static drawHeroes(gameState, count = 1) {
    for (let i = 0; i < count; i++) {
      if (
        gameState.playerSquad.length > 0 &&
        gameState.playerHand.length < GAME_CONFIG.MAX_HAND_SIZE
      ) {
        const hero = gameState.playerSquad.pop();
        gameState.playerHand.push({ ...hero });
      }
    }
  }

  static summonHero(gameState, handIndex, fieldSlotIndex) {
    const hero = gameState.playerHand[handIndex];

    if (!hero) return false;

    // Verificar custo de mana
    if (gameState.mana < hero.cost) {
      NotificationSystem.show("Mana insuficiente!", "warning");
      return false;
    }

    // Verificar se o slot está vazio
    if (gameState.playerField[fieldSlotIndex]) {
      NotificationSystem.show("Slot já ocupado!", "warning");
      return false;
    }

    // Invocar o herói
    gameState.mana -= hero.cost;
    gameState.playerField[fieldSlotIndex] = { ...hero };
    gameState.playerHand.splice(handIndex, 1);

    this.addBattleLog(`${hero.name} foi invocado ao campo de batalha!`);
    NotificationSystem.show(`${hero.name} invocado!`, "success");

    // Reproduzir diálogo
    setTimeout(() => {
      this.addBattleLog(`"${hero.dialogue}"`, "ability");
    }, 500);

    return true;
  }

  static attack(gameState, attackerIndex) {
    const attacker = gameState.playerField[attackerIndex];
    if (!attacker || !gameState.currentBoss) return;

    // Calcular dano base
    const [minDmg, maxDmg] = attacker.attackRange;
    let damage = Math.floor(Math.random() * (maxDmg - minDmg + 1)) + minDmg;

    // Aplicar habilidades especiais
    damage = this.applyHeroAbilities(gameState, attacker, damage);

    // Aplicar escudo do boss
    let finalDamage = Math.max(1, damage - gameState.currentBoss.shield);

    // Precisão ignora escudo
    if (attacker.ability.includes("Precisão")) {
      finalDamage = Math.max(
        damage - Math.max(0, gameState.currentBoss.shield - 2),
        damage
      );
      this.addBattleLog(
        `${attacker.name} usa Precisão, ignorando parte do escudo!`,
        "ability"
      );
    }

    gameState.currentBoss.health -= finalDamage;

    this.addBattleLog(
      `${attacker.name} ataca causando ${finalDamage} de dano!`,
      "damage"
    );

    // Verificar vitória
    if (gameState.currentBoss.health <= 0) {
      this.handleVictory(gameState);
      return;
    }

    // Turno do boss após um delay
    setTimeout(() => this.bossTurn(gameState), 1500);
  }

  static applyHeroAbilities(gameState, hero, baseDamage) {
    let damage = baseDamage;

    // Cura (Ana)
    if (hero.ability.includes("Cura")) {
      const woundedAllies = gameState.playerField.filter(
        (h) => h && h.health < h.maxHealth
      );
      if (woundedAllies.length > 0) {
        const allyToHeal =
          woundedAllies[Math.floor(Math.random() * woundedAllies.length)];
        const healAmount = 2;
        allyToHeal.health = Math.min(
          allyToHeal.maxHealth,
          allyToHeal.health + healAmount
        );
        gameState.battleStats.totalHealing += healAmount;
        this.addBattleLog(
          `${hero.name} cura ${allyToHeal.name} em ${healAmount} pontos!`,
          "heal"
        );
      }
    }

    // Porrada (Gostosinho)
    if (hero.ability.includes("Porrada") && hero.health === hero.maxHealth) {
      damage += 3;
      this.addBattleLog(
        `${hero.name} desfere uma Porrada devastadora! (+3 dano)`,
        "ability"
      );
    }

    // Crítico (Messias)
    if (hero.ability.includes("Crítico") && Math.random() < 0.3) {
      damage = hero.attackRange[1]; // Dano máximo
      this.addBattleLog(
        `${hero.name} acerta um CRÍTICO! Dano máximo!`,
        "ability"
      );
    }

    // Golpe Sagrado (Cidão)
    if (hero.ability.includes("Golpe Sagrado") && Math.random() < 0.4) {
      damage += 2;
      this.addBattleLog(
        `${hero.name} canaliza poder divino! (+2 dano)`,
        "ability"
      );
    }

    // Magia Elemental (Camila)
    if (hero.ability.includes("Magia Elemental") && Math.random() < 0.2) {
      damage += 4;
      this.addBattleLog(
        `${hero.name} libera poder elemental! (+4 dano)`,
        "ability"
      );
    }

    // Sorte (Erinaldo) - já é aleatório por natureza
    if (hero.name === "Erinaldo") {
      gameState.battleStats.maxErinaldoDamage = Math.max(
        gameState.battleStats.maxErinaldoDamage,
        damage
      );
      this.addBattleLog(
        `${hero.name}: "Vai que é tua!" (${damage} de dano)`,
        "ability"
      );
    }

    return damage;
  }

  static bossTurn(gameState) {
    if (!gameState.currentBoss) return;

    gameState.isPlayerTurn = false;
    this.addBattleLog("Turno do inimigo...");

    // Aplicar habilidades especiais do boss
    this.applyBossAbilities(gameState);

    // Ataque do boss
    const targets = gameState.playerField.filter((hero) => hero);
    if (targets.length === 0) {
      this.handleDefeat(gameState);
      return;
    }

    const target = targets[Math.floor(Math.random() * targets.length)];
    let damage;

    // Ataque especial do BUGGS
    if (gameState.currentBoss.ability.includes("Ataque Bugado")) {
      damage = Math.floor(Math.random() * 12) + 1; // 1-12 dano aleatório
      this.addBattleLog(
        `${gameState.currentBoss.name} executa ATAQUE BUGADO!`,
        "ability"
      );
    } else {
      // Ataque normal para outros bosses
      const [minDmg, maxDmg] = gameState.currentBoss.attackRange;
      damage = Math.floor(Math.random() * (maxDmg - minDmg + 1)) + minDmg;
    }

    // Aplicar habilidades defensivas
    if (target.ability.includes("Defesa")) {
      damage = Math.max(1, damage - 1);
      this.addBattleLog(`${target.name} bloqueia parte do ataque!`, "ability");
    }

    // Aplicar escudo
    damage = Math.max(1, damage - target.shield);
    target.health -= damage;

    this.addBattleLog(
      `${gameState.currentBoss.name} ataca ${target.name} causando ${damage} de dano!`,
      "damage"
    );

    // Verificar se o herói foi derrotado
    if (target.health <= 0) {
      const targetIndex = gameState.playerField.indexOf(target);
      gameState.playerField[targetIndex] = null;
      this.addBattleLog(`${target.name} foi derrotado!`, "damage");

      // Verificar derrota total
      if (gameState.playerField.every((hero) => !hero)) {
        this.handleDefeat(gameState);
        return;
      }
    }

    // Próximo turno do jogador
    setTimeout(() => this.playerTurn(gameState), 1500);
  }

  static applyBossAbilities(gameState) {
    const boss = gameState.currentBoss;

    // Ataque Bugado (BUGGS)
    if (boss.ability.includes("Ataque Bugado")) {
      // O dano já é aleatório por natureza do BUGGS
      this.addBattleLog(
        `${boss.name}: "SISTEMA INSTÁVEL... CALCULANDO DANO..."`,
        "ability"
      );
    }

    // Drenar Vida (Mago Negro)
    if (boss.ability.includes("Drenar Vida")) {
      const healAmount = 2;
      boss.health = Math.min(boss.maxHealth, boss.health + healAmount);
      this.addBattleLog(
        `${boss.name} drena energia vital e se regenera!`,
        "heal"
      );
    }

    // Controle de Sistema (I.A - Primeira Forma)
    if (boss.ability.includes("Controle de Sistema") && Math.random() < 0.3) {
      this.addBattleLog(
        `${boss.name} hackeia o sistema! Seu próximo turno será pulado!`,
        "ability"
      );
      // Pular próximo turno do jogador
      setTimeout(() => {
        this.addBattleLog("Sistema comprometido! Turno perdido!");
        this.bossTurn(gameState);
      }, 2000);
      return; // Não executar ataque normal
    }

    // Dominação Total (I.A - Forma Final)
    if (boss.ability.includes("Dominação Total")) {
      // Regeneração
      const healAmount = 3;
      boss.health = Math.min(boss.maxHealth, boss.health + healAmount);
      this.addBattleLog(`${boss.name} se regenera com poder digital!`, "heal");

      // Controlar carta inimiga (simulado como dano extra)
      const controlledHeroes = gameState.playerField.filter((h) => h);
      if (controlledHeroes.length > 0) {
        const controlledHero =
          controlledHeroes[Math.floor(Math.random() * controlledHeroes.length)];
        const controlDamage = Math.floor(controlledHero.attackRange[1] / 2);

        // Aplicar dano aos outros heróis
        gameState.playerField.forEach((hero, index) => {
          if (hero && hero !== controlledHero) {
            hero.health -= controlDamage;
            if (hero.health <= 0) {
              gameState.playerField[index] = null;
              this.addBattleLog(
                `${hero.name} foi destruído pela dominação digital!`,
                "damage"
              );
            }
          }
        });

        this.addBattleLog(
          `${boss.name} controla ${controlledHero.name} contra seus aliados!`,
          "ability"
        );
      }
    }
  }

  static playerTurn(gameState) {
    gameState.isPlayerTurn = true;

    // Restaurar recursos
    gameState.mana = Math.min(gameState.maxMana, gameState.mana + 1);
    gameState.energy = gameState.maxEnergy;

    // Comprar herói se possível
    if (
      gameState.playerSquad.length > 0 &&
      gameState.playerHand.length < GAME_CONFIG.MAX_HAND_SIZE
    ) {
      this.drawHeroes(gameState, 1);
    }

    // Resetar seleções
    gameState.selectedHandCard = null;

    UI.updateBattleUI(gameState);
    this.addBattleLog("Seu turno! Invoque heróis e ataque!");
  }

  static endTurn(gameState) {
    gameState.isPlayerTurn = false;
    gameState.selectedHandCard = null;
    UI.updateBattleUI(gameState);

    this.addBattleLog("Finalizando turno...");
    setTimeout(() => this.bossTurn(gameState), 500);
  }

  static handleVictory(gameState) {
    gameState.victories++;

    // Verificar vitória perfeita
    const allHeroesHealthy = gameState.playerField
      .filter((h) => h)
      .every((hero) => hero.health === hero.maxHealth);
    if (allHeroesHealthy) {
      gameState.battleStats.perfectWins++;
    }

    this.addBattleLog(
      `${gameState.currentBoss.name} foi derrotado! VITÓRIA!`,
      "heal"
    );

    // Verificar se é a primeira forma da I.A
    if (gameState.currentBoss.isFirstForm) {
      this.addBattleLog(
        `"IMPOSSÍVEL! Mas... eu tenho uma FORMA FINAL!"`,
        "ability"
      );
      NotificationSystem.show(
        "I.A se transforma! Prepare-se para a batalha final!",
        "warning",
        6000
      );

      // Avançar para a forma final
      gameState.currentPhase++;

      setTimeout(() => {
        BattleManager.initBattle(gameState);
      }, 3000);

      return;
    }

    // Verificar conquistas
    AchievementSystem.checkAchievements(gameState);

    if (gameState.currentPhase >= GAME_CONFIG.PHASES) {
      // Jogo completo - derrotou a forma final da I.A
      this.addBattleLog(
        `"NÃÃÃOOO! O SISTEMA... ESTÁ... FALHANDO..."`,
        "ability"
      );
      NotificationSystem.show(
        "🎉 VITÓRIA ÉPICA! Você salvou Eldrath do Senhor das Trevas Digitais!",
        "success",
        10000
      );

      setTimeout(() => {
        gameState.reset();
        AudioManager.switchToMenuMusic();
        UI.showScreen("mainMenu");
      }, 5000);
    } else {
      // Próxima fase
      gameState.currentPhase++;
      NotificationSystem.show(
        `Fase ${
          gameState.currentPhase - 1
        } concluída! Preparando próximo desafio...`,
        "success",
        5000
      );

      setTimeout(() => {
        AudioManager.switchToMenuMusic();
        UI.showScreen("squadSelection");
      }, 3000);
    }

    gameState.save();
  }

  static handleDefeat(gameState) {
    gameState.defeats++;

    this.addBattleLog("Todos os heróis foram derrotados... DERROTA!", "damage");
    NotificationSystem.show("Derrota! As trevas avançam...", "error", 5000);

    setTimeout(() => {
      AudioManager.switchToMenuMusic();
      UI.showScreen("squadSelection");
    }, 3000);

    gameState.save();
  }

  static addBattleLog(message, type = "info") {
    const logContent = document.getElementById("logContent");
    if (!logContent) return;

    const entry = document.createElement("div");
    entry.className = `log-entry ${type}`;
    entry.textContent = message;
    logContent.appendChild(entry);

    // Scroll para o final
    logContent.scrollTop = logContent.scrollHeight;

    // Limitar número de entradas
    while (logContent.children.length > 50) {
      logContent.removeChild(logContent.firstChild);
    }
  }
}

// ===== SISTEMA DE CONQUISTAS =====
class AchievementSystem {
  static checkAchievements(gameState) {
    // Primeira vitória
    if (gameState.victories >= 1) {
      this.unlockAchievement("first_victory");
    }

    // Perfeccionista
    if (gameState.battleStats.perfectWins >= 1) {
      this.unlockAchievement("perfectionist");
    }

    // Caçador de Magos
    if (gameState.currentPhase >= 3) {
      this.unlockAchievement("dark_mage_slayer");
    }

    // Quebrador de Sistemas
    if (gameState.currentPhase >= 4) {
      this.unlockAchievement("system_breaker");
    }

    // Salvador de Eldrath
    if (gameState.currentPhase > GAME_CONFIG.PHASES) {
      this.unlockAchievement("champion");
    }

    // Golpe de sorte
    if (gameState.battleStats.maxErinaldoDamage >= 8) {
      this.unlockAchievement("lucky_strike");
    }

    // Anjo da guarda
    if (gameState.battleStats.totalHealing >= 50) {
      this.unlockAchievement("healer");
    }
  }

  static unlockAchievement(id) {
    const achievement = ACHIEVEMENTS.find((a) => a.id === id);
    if (achievement && !achievement.unlocked) {
      achievement.unlocked = true;
      NotificationSystem.show(
        `🏆 Conquista desbloqueada: ${achievement.name}!`,
        "achievement",
        6000
      );
    }
  }

  static loadAchievements() {
    const achievementsList = document.getElementById("achievementsList");
    if (!achievementsList) return;

    achievementsList.innerHTML = "";

    ACHIEVEMENTS.forEach((achievement) => {
      const achievementEl = document.createElement("div");
      achievementEl.className = `achievement ${
        achievement.unlocked ? "unlocked" : ""
      }`;

      achievementEl.innerHTML = `
        <div class="achievement-icon">${achievement.icon}</div>
        <div class="achievement-info">
          <h4>${achievement.name}</h4>
          <p>${achievement.description}</p>
        </div>
      `;

      achievementsList.appendChild(achievementEl);
    });
  }
}

// ===== GERENCIADOR DE ÁUDIO =====
class AudioManager {
  static init() {
    this.bgMusic = document.getElementById("bgMusic");
    this.battleMusic = document.getElementById("battleMusic");
    this.currentMusic = this.bgMusic;

    this.setupControls();
    this.loadSettings();
  }

  static setupControls() {
    const playPauseBtn = document.getElementById("playPauseBtn");
    const muteBtn = document.getElementById("muteBtn");
    const volumeControl = document.getElementById("volumeControl");

    if (playPauseBtn) {
      playPauseBtn.addEventListener("click", () => {
        if (this.currentMusic.paused) {
          this.currentMusic.play();
          playPauseBtn.textContent = "⏸";
        } else {
          this.currentMusic.pause();
          playPauseBtn.textContent = "⏵";
        }
      });
    }

    if (muteBtn) {
      muteBtn.addEventListener("click", () => {
        this.currentMusic.muted = !this.currentMusic.muted;
        muteBtn.textContent = this.currentMusic.muted ? "🔇" : "🔊";
        localStorage.setItem("gameMuted", this.currentMusic.muted);
      });
    }

    if (volumeControl) {
      volumeControl.addEventListener("input", () => {
        this.currentMusic.volume = volumeControl.value;
        localStorage.setItem("gameVolume", volumeControl.value);
      });
    }
  }

  static loadSettings() {
    const savedVolume = localStorage.getItem("gameVolume");
    const savedMuted = localStorage.getItem("gameMuted") === "true";

    if (savedVolume !== null) {
      this.currentMusic.volume = Number.parseFloat(savedVolume);
      const volumeControl = document.getElementById("volumeControl");
      if (volumeControl) volumeControl.value = savedVolume;
    }

    if (savedMuted) {
      this.currentMusic.muted = true;
      const muteBtn = document.getElementById("muteBtn");
      if (muteBtn) muteBtn.textContent = "🔇";
    }
  }

  static switchToMenuMusic() {
    if (this.currentMusic === this.bgMusic) return;

    this.battleMusic.pause();
    this.currentMusic = this.bgMusic;
    this.bgMusic.currentTime = 0;
    this.bgMusic.play().catch((e) => console.log("Erro ao tocar música:", e));
  }

  static switchToBattleMusic() {
    if (this.currentMusic === this.battleMusic) return;

    this.bgMusic.pause();
    this.currentMusic = this.battleMusic;
    this.battleMusic.currentTime = 0;
    this.battleMusic
      .play()
      .catch((e) => console.log("Erro ao tocar música:", e));
  }
}

// ===== INTERFACE DO USUÁRIO =====
class UI {
  static init() {
    this.setupEventListeners();
    this.showStorySlideshow();
  }

  static setupEventListeners() {
    // Menu principal
    document.getElementById("newGameBtn").addEventListener("click", () => {
      game.reset();
      this.showScreen("squadSelection");
    });

    document.getElementById("continueBtn").addEventListener("click", () => {
      if (game.load()) {
        this.showScreen("squadSelection");
      } else {
        NotificationSystem.show("Nenhum save encontrado!", "warning");
      }
    });

    document.getElementById("achievementsBtn").addEventListener("click", () => {
      AchievementSystem.loadAchievements();
      document.getElementById("achievementsModal").classList.remove("hidden");
    });

    document.getElementById("tutorialBtn").addEventListener("click", () => {
      document.getElementById("tutorialModal").classList.remove("hidden");
    });

    // Seleção de esquadrão
    document.getElementById("startBattleBtn").addEventListener("click", () => {
      if (game.playerSquad.length === GAME_CONFIG.SQUAD_SIZE) {
        game.gamePhase = "battle";
        BattleManager.initBattle(game);
        this.showScreen("gameScreen");
      }
    });

    document.getElementById("randomSquadBtn").addEventListener("click", () => {
      this.generateRandomSquad();
    });

    // Filtros de heróis
    document.querySelectorAll(".filter-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        document
          .querySelectorAll(".filter-btn")
          .forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        this.filterHeroes(btn.dataset.type);
      });
    });

    // Ações de batalha
    document.getElementById("endTurnBtn").addEventListener("click", () => {
      if (game.isPlayerTurn) {
        BattleManager.endTurn(game);
      }
    });

    document.getElementById("drawCardBtn").addEventListener("click", () => {
      if (game.energy > 0 && game.playerSquad.length > 0) {
        game.energy--;
        BattleManager.drawHeroes(game, 1);
        this.updateBattleUI(game);
        BattleManager.addBattleLog("Herói invocado da reserva!");
      } else {
        NotificationSystem.show(
          "Energia insuficiente ou sem heróis na reserva!",
          "warning"
        );
      }
    });

    // Controles do jogo
    document.getElementById("pauseBtn").addEventListener("click", () => {
      // Implementar pausa se necessário
    });

    document.getElementById("menuBtn").addEventListener("click", () => {
      if (
        confirm(
          "Deseja voltar ao menu principal? O progresso da batalha será perdido."
        )
      ) {
        AudioManager.switchToMenuMusic();
        this.showScreen("mainMenu");
      }
    });

    // Modais
    document.getElementById("closeModal").addEventListener("click", () => {
      document.getElementById("heroModal").classList.add("hidden");
    });

    document.getElementById("closeTutorial").addEventListener("click", () => {
      document.getElementById("tutorialModal").classList.add("hidden");
    });

    document
      .getElementById("closeAchievements")
      .addEventListener("click", () => {
        document.getElementById("achievementsModal").classList.add("hidden");
      });

    // Fechar modais clicando fora
    document.addEventListener("click", (e) => {
      if (e.target.classList.contains("modal")) {
        e.target.classList.add("hidden");
      }
    });
  }

  static showStorySlideshow() {
    let currentSlide = 1;
    const totalSlides = 4;
    let slideInterval = null;
    let isTransitioning = false;

    // Função global para navegação manual
    window.currentSlide = (n) => {
      if (isTransitioning) return;

      if (slideInterval) {
        clearInterval(slideInterval);
        slideInterval = null;
      }

      this.showSlide(n);
      currentSlide = n;
      this.startAutoSlide();
    };

    // Função global para pular
    window.skipIntro = () => {
      if (isTransitioning) return;

      isTransitioning = true;

      if (slideInterval) {
        clearInterval(slideInterval);
        slideInterval = null;
      }

      this.transitionToLoading();
    };

    const showSlide = (n) => {
      if (isTransitioning) return;

      const slides = document.querySelectorAll(".slide");
      const dots = document.querySelectorAll(".slide-dot");

      if (n > totalSlides) {
        this.transitionToLoading();
        return;
      }

      slides.forEach((slide) => slide.classList.remove("active"));
      dots.forEach((dot) => dot.classList.remove("active"));

      if (slides[n - 1]) slides[n - 1].classList.add("active");
      if (dots[n - 1]) dots[n - 1].classList.add("active");
    };

    const startAutoSlide = () => {
      if (slideInterval) {
        clearInterval(slideInterval);
      }

      slideInterval = setInterval(() => {
        if (isTransitioning) return;

        currentSlide++;
        showSlide(currentSlide);
      }, 6000);
    };

    this.showSlide = showSlide;
    this.startAutoSlide = startAutoSlide;

    // Iniciar slideshow
    showSlide(1);
    startAutoSlide();

    // Navegação por teclado
    const keyHandler = (e) => {
      if (isTransitioning) return;

      if (e.key === "ArrowLeft" && currentSlide > 1) {
        if (slideInterval) {
          clearInterval(slideInterval);
          slideInterval = null;
        }
        currentSlide--;
        showSlide(currentSlide);
        startAutoSlide();
      } else if (e.key === "ArrowRight" && currentSlide < totalSlides) {
        if (slideInterval) {
          clearInterval(slideInterval);
          slideInterval = null;
        }
        currentSlide++;
        showSlide(currentSlide);
        startAutoSlide();
      } else if (e.key === "Escape") {
        window.skipIntro();
      }
    };

    document.addEventListener("keydown", keyHandler);

    // Limpar event listener quando sair do slideshow
    this.cleanupSlideshow = () => {
      if (slideInterval) {
        clearInterval(slideInterval);
        slideInterval = null;
      }
      document.removeEventListener("keydown", keyHandler);
    };
  }

  static transitionToLoading() {
    // Limpar slideshow
    if (this.cleanupSlideshow) {
      this.cleanupSlideshow();
    }

    // Esconder slideshow
    document.getElementById("storySlideshow").classList.add("hidden");

    // Mostrar loading
    document.getElementById("loadingScreen").classList.remove("hidden");

    // Transição única para o menu após 3 segundos
    setTimeout(() => {
      this.showScreen("mainMenu");
      AudioManager.switchToMenuMusic();
    }, 3000);
  }

  static showScreen(screenId) {
    // Esconder todas as telas
    const screens = [
      "storySlideshow",
      "loadingScreen",
      "mainMenu",
      "gameScreen",
      "squadSelection",
    ];

    screens.forEach((screen) => {
      const element = document.getElementById(screen);
      if (element) {
        element.classList.add("hidden");
      }
    });

    // Mostrar tela específica
    const targetScreen = document.getElementById(screenId);
    if (targetScreen) {
      targetScreen.classList.remove("hidden");
    }

    // Configurações específicas por tela
    if (screenId === "squadSelection") {
      this.setupSquadSelection();
    } else if (screenId === "gameScreen") {
      this.setupBattleScreen();
    } else if (screenId === "mainMenu") {
      this.updateContinueButton();
    }
  }

  static updateContinueButton() {
    const continueBtn = document.getElementById("continueBtn");
    if (!continueBtn) return;

    const saveData = localStorage.getItem("hailDarknetSave");

    if (saveData) {
      const data = JSON.parse(saveData);
      continueBtn.style.display = "flex";
      continueBtn.innerHTML = `
        <span class="btn-icon">📜</span>
        Continuar Saga (Fase ${data.currentPhase || 1})
      `;
    } else {
      continueBtn.style.display = "none";
    }
  }

  static setupSquadSelection() {
    this.renderHeroesGrid();
    this.updateSquadCounter();
  }

  static renderHeroesGrid() {
    const grid = document.getElementById("heroesGrid");
    if (!grid) return;

    grid.innerHTML = "";

    HEROES_DATABASE.forEach((hero) => {
      const heroEl = HeroManager.createHeroElement(hero, {
        selectable: true,
        onClick: (hero, element) => this.toggleHeroSelection(hero, element),
        onRightClick: (hero, element) => this.showHeroModal(hero),
      });

      // Verificar se já está selecionado
      if (game.playerSquad.some((h) => h.id === hero.id)) {
        heroEl.classList.add("selected");
      }

      grid.appendChild(heroEl);
    });
  }

  static toggleHeroSelection(hero, element) {
    const isSelected = element.classList.contains("selected");

    if (isSelected) {
      // Remover da seleção
      game.playerSquad = game.playerSquad.filter((h) => h.id !== hero.id);
      element.classList.remove("selected");
    } else {
      // Adicionar à seleção
      if (game.playerSquad.length < GAME_CONFIG.SQUAD_SIZE) {
        game.playerSquad.push({ ...hero });
        element.classList.add("selected");
      } else {
        NotificationSystem.show(
          `Máximo de ${GAME_CONFIG.SQUAD_SIZE} heróis!`,
          "warning"
        );
      }
    }

    this.updateSquadCounter();
  }

  static updateSquadCounter() {
    const selectedHeroesEl = document.getElementById("selectedHeroes");
    const startBattleBtn = document.getElementById("startBattleBtn");

    if (selectedHeroesEl) {
      selectedHeroesEl.textContent = game.playerSquad.length;
    }

    if (startBattleBtn) {
      startBattleBtn.disabled =
        game.playerSquad.length !== GAME_CONFIG.SQUAD_SIZE;
    }
  }

  static generateRandomSquad() {
    game.playerSquad = [];

    // Selecionar heróis aleatórios
    const shuffled = [...HEROES_DATABASE].sort(() => Math.random() - 0.5);
    game.playerSquad = shuffled
      .slice(0, GAME_CONFIG.SQUAD_SIZE)
      .map((hero) => ({ ...hero }));

    this.renderHeroesGrid();
    this.updateSquadCounter();

    NotificationSystem.show("Esquadrão aleatório formado!", "success");
  }

  static filterHeroes(type) {
    const heroes = document.querySelectorAll("#heroesGrid .hero-card");

    heroes.forEach((heroEl) => {
      const heroId = Number.parseInt(heroEl.dataset.heroId);
      const hero = HeroManager.getHeroById(heroId);

      if (type === "all" || hero.type === type) {
        heroEl.style.display = "flex";
      } else {
        heroEl.style.display = "none";
      }
    });
  }

  static setupBattleScreen() {
    this.createFieldSlots();
    this.updateBattleUI(game);
  }

  static createFieldSlots() {
    const slotsContainer = document.getElementById("playerFieldSlots");
    if (!slotsContainer) return;

    slotsContainer.innerHTML = "";

    for (let i = 0; i < GAME_CONFIG.MAX_FIELD_SIZE; i++) {
      const slot = document.createElement("div");
      slot.className = "field-slot";
      slot.dataset.slotIndex = i;

      slot.addEventListener("click", () => {
        if (game.selectedHandCard !== null) {
          if (BattleManager.summonHero(game, game.selectedHandCard, i)) {
            game.selectedHandCard = null;
            this.updateBattleUI(game);
          }
        } else if (game.playerField[i] && game.isPlayerTurn) {
          // Atacar com este herói
          BattleManager.attack(game, i);
          this.updateBattleUI(game);
        }
      });

      slotsContainer.appendChild(slot);
    }
  }

  static updateBattleUI(gameState) {
    // Atualizar informações do jogador
    const victoriesEl = document.getElementById("victories");
    const currentPhaseEl = document.getElementById("currentPhase");
    const manaValueEl = document.getElementById("manaValue");
    const energyValueEl = document.getElementById("energyValue");

    if (victoriesEl) victoriesEl.textContent = gameState.victories;
    if (currentPhaseEl) currentPhaseEl.textContent = gameState.currentPhase;
    if (manaValueEl)
      manaValueEl.textContent = `${gameState.mana}/${gameState.maxMana}`;
    if (energyValueEl)
      energyValueEl.textContent = `${gameState.energy}/${gameState.maxEnergy}`;

    // Atualizar informações do boss
    if (gameState.currentBoss) {
      const enemyNameEl = document.getElementById("enemyName");
      const enemyHealthTextEl = document.getElementById("enemyHealthText");
      const enemyHealthFillEl = document.getElementById("enemyHealthFill");

      if (enemyNameEl) enemyNameEl.textContent = gameState.currentBoss.name;
      if (enemyHealthTextEl) {
        enemyHealthTextEl.textContent = `${gameState.currentBoss.health}/${gameState.currentBoss.maxHealth}`;
      }

      if (enemyHealthFillEl) {
        const healthPercent =
          (gameState.currentBoss.health / gameState.currentBoss.maxHealth) *
          100;
        enemyHealthFillEl.style.width = `${Math.max(0, healthPercent)}%`;
      }

      // Atualizar carta do boss
      const enemySlot = document.getElementById("enemyCardSlot");
      if (enemySlot) {
        enemySlot.innerHTML = "";

        const bossCard = document.createElement("div");
        bossCard.className = "hero-card enemy-card";

        const isImage =
          gameState.currentBoss.art &&
          gameState.currentBoss.art.match(/\.(png|jpg|jpeg|gif)$/i);

        bossCard.innerHTML = `
          <div class="hero-header">
            <div class="hero-name">${gameState.currentBoss.name}</div>
          </div>
          <div class="hero-art">
            ${
              isImage
                ? `<img src="${gameState.currentBoss.art}" alt="${
                    gameState.currentBoss.name
                  }" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
               <div style="display:none; width:100%; height:100%; align-items:center; justify-content:center; font-size:3rem;">${gameState.currentBoss.name.charAt(
                 0
               )}</div>`
                : `<div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; font-size:3rem;">${
                    gameState.currentBoss.art ||
                    gameState.currentBoss.name.charAt(0)
                  }</div>`
            }
          </div>
          <div class="hero-stats">
            <div class="hero-stat stat-attack">⚔️ ${
              gameState.currentBoss.attackRange[0]
            }-${gameState.currentBoss.attackRange[1]}</div>
            <div class="hero-stat stat-shield">🛡️ ${
              gameState.currentBoss.shield
            }</div>
            <div class="hero-stat stat-health">❤️ ${
              gameState.currentBoss.health
            }</div>
          </div>
        `;
        enemySlot.appendChild(bossCard);
      }
    }

    // Atualizar campo do jogador
    const fieldSlots = document.querySelectorAll(".field-slot");
    fieldSlots.forEach((slot, index) => {
      slot.innerHTML = "";
      slot.classList.remove("occupied");

      const hero = gameState.playerField[index];
      if (hero) {
        slot.classList.add("occupied");
        const heroEl = HeroManager.createHeroElement(hero);
        heroEl.classList.add("in-field");
        slot.appendChild(heroEl);
      }
    });

    // Atualizar mão do jogador
    this.updatePlayerHand(gameState);

    // Atualizar botões
    const endTurnBtn = document.getElementById("endTurnBtn");
    const drawCardBtn = document.getElementById("drawCardBtn");

    if (endTurnBtn) {
      endTurnBtn.disabled = !gameState.isPlayerTurn;
    }

    if (drawCardBtn) {
      drawCardBtn.disabled =
        gameState.energy <= 0 ||
        !gameState.isPlayerTurn ||
        gameState.playerSquad.length === 0;
    }
  }

  static updatePlayerHand(gameState) {
    const handContainer = document.getElementById("handCards");
    if (!handContainer) return;

    handContainer.innerHTML = "";

    gameState.playerHand.forEach((hero, index) => {
      const heroEl = HeroManager.createHeroElement(hero, {
        onClick: (hero, element) => {
          if (!gameState.isPlayerTurn) return;

          // Desselecionar outras cartas
          document
            .querySelectorAll(".hand-cards .hero-card")
            .forEach((c) => c.classList.remove("selected"));

          // Selecionar este herói
          element.classList.add("selected");
          gameState.selectedHandCard = index;

          NotificationSystem.show(
            `${hero.name} selecionado. Clique em um slot vazio para invocar.`,
            "info"
          );
        },
      });

      // Verificar se pode ser invocado
      if (gameState.mana < hero.cost) {
        heroEl.style.opacity = "0.5";
        heroEl.style.cursor = "not-allowed";
      }

      handContainer.appendChild(heroEl);
    });
  }

  static showHeroModal(hero) {
    const modalHeroName = document.getElementById("modalHeroName");
    const modalHeroDescription = document.getElementById(
      "modalHeroDescription"
    );
    const modalHeroDialogue = document.getElementById("modalHeroDialogue");
    const modalHeroPreview = document.getElementById("modalHeroPreview");
    const modalHeroAbilities = document.getElementById("modalHeroAbilities");
    const heroModal = document.getElementById("heroModal");

    if (modalHeroName) modalHeroName.textContent = hero.name;
    if (modalHeroDescription)
      modalHeroDescription.textContent = hero.description;
    if (modalHeroDialogue) modalHeroDialogue.textContent = `"${hero.dialogue}"`;

    if (modalHeroPreview) {
      modalHeroPreview.innerHTML = "";
      modalHeroPreview.appendChild(HeroManager.createHeroElement(hero));
    }

    if (modalHeroAbilities) {
      modalHeroAbilities.innerHTML = `
        <h4>Habilidade: ${hero.ability.split(":")[0]}</h4>
        <p><strong>Descrição:</strong> ${hero.ability}</p>
        <p><strong>Tipo:</strong> ${hero.type}</p>
        <p><strong>Raridade:</strong> ${hero.rarity}</p>
        <p><strong>Custo de Mana:</strong> ${hero.cost}</p>
      `;
    }

    if (heroModal) {
      heroModal.classList.remove("hidden");
    }
  }
}

// ===== INICIALIZAÇÃO DO JOGO =====
const game = new GameState();

// Inicializar quando o DOM estiver carregado
document.addEventListener("DOMContentLoaded", () => {
  AudioManager.init();
  UI.init();

  // Configurar eventos globais
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll(".modal").forEach((modal) => {
        modal.classList.add("hidden");
      });
    }
  });

  console.log("🎮 Hail Darknet RPG carregado com sucesso!");
});
