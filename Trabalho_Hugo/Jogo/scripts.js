       const cardsDatabase = [
            {
                id: 1,
                name: "Ana",
                art: "imgs/ana.png",
                shield: 5,
                health: 18,
                maxHealth: 18,
                attackRange: [4, 9],
                ability: "Cura: No ataque, cura 3 de vida de um aliado aleatório",
                description: "Enfermeira que mantém a equipe viva com seus cuidados.",
                dialogue: "Fica tranquilo, eu te cubro!",
                type: "support"
            },
            {
                id: 2,
                name: "Gostosinho",
                art: "imgs/gostozinho.png",
                shield: 8,
                health: 20,
                maxHealth: 20,
                attackRange: [4, 8],
                ability: "Porrada: +2 de dano se estiver com vida cheia",
                description: "O brabo do time, sempre na linha de frente.",
                dialogue: "Vamo que vamo, rapaziada!",
                type: "tank"
            },
            {
                id: 3,
                name: "Moreno",
                art: "imgs/moreno.png",
                shield: 4,
                health: 15,
                maxHealth: 15,
                attackRange: [5, 9],
                ability: "Sabedoria: Ignora 2 de escudo do inimigo",
                description: "Atirador certeiro que mira nas fraquezas do inimigo.",
                dialogue: "Tiro na cabeça e acabou!",
                type: "marksman"
            },
            {
                id: 4,
                name: "Hugo",
                art: "imgs/hugo.png",
                shield: 10,
                health: 16,
                maxHealth: 16,
                attackRange: [2, 5],
                ability: "Defesa: Bloqueia 1 de dano extra de cada ataque",
                description: "Tanque da equipe, protege os aliados com seu escudo.",
                dialogue: "Ninguém passa por mim!",
                type: "tank"
            },
            {
                id: 5,
                name: "Messias",
                art: "imgs/mesias.png",
                shield: 3,
                health: 12,
                maxHealth: 12,
                attackRange: [6, 10],
                ability: "Crítico: 25% de chance de causar dano máximo",
                description: "Milagreiro do time, seus ataques são imprevisíveis.",
                dialogue: "Deus está comigo!",
                type: "marksman"
            },
            {
                id: 6,
                name: "Erinaldo",
                art: "imgs/erinaldo.png",
                shield: 6,
                health: 14,
                maxHealth: 14,
                attackRange: [1, 12],
                ability: "Sorte: Dano totalmente aleatório (1-12)",
                description: "Ou acerta ou erra feio, não há meio termo.",
                dialogue: "Vai que é tua, Erinaldo!",
                type: "wildcard"
            },
            {
                id: 7,
                name: "Camila",
                art: "imgs/camila.png",
                shield: 7,
                health: 13,
                maxHealth: 13,
                attackRange: [4, 7],
                ability: "Precisão: Ignora 2 de escudo do inimigo",
                description: "Controla os elementos com precisão cirúrgica.",
                dialogue: "Os elementos obedecem ao meu comando!",
                type: "mage"
            },
            {
                id: 8,
                name: "Cidão",
                art: "imgs/sidao.png",
                shield: 9,
                health: 16,
                maxHealth: 16,
                attackRange: [4, 6],
                ability: "Golpe Sagrado: 50% de chance de +3 de dano",
                description: "Guerreiro sagrado que abate os hereges.",
                dialogue: "Pela luz, eu te julgo!",
                type: "paladin"
            },
        ];

        // Cartas de Boss melhoradas
        const bossCards = [
            {
                id: 101,
                name: "Mago Negro",
                art: "imgs/magonegro.png",
                shield: 12,
                health: 25,
                maxHealth: 25,
                attackRange: [5, 10],
                ability: "Sucumba: Cura metade do dano causado",
                description: "Um antigo mago que se alimenta do sangue dos vivos.",
                dialogue: "Seu cerebro será meu banquete!",
                type: "mage"
            },
            {
                id: 102,
                name: "BUGGS",
                art: "imgs/bugg.jpg",
                shield: 8,
                health: 10,
                maxHealth: 10,
                attackRange: [1, 10],
                ability: "ataque bugado : casusa dano aleatório entre 1 e 15",
                description: "Vou dar choque não seu sistema...",
                dialogue: "RECABVAS ...ERROR!!!! oTaRIo4444",
                type: "ERROR444!!!!"
            },
            {
                id: 103,
                name: "Lich Imortal",
                art: "imgs/lich.png",
                shield: 10,
                health: 20,
                maxHealth: 20,
                attackRange: [6, 9],
                ability: "Necrose: Reduz saúde máxima do inimigo em 1 por ataque",
                description: "Um mago que renunciou à vida para alcançar poder infinito.",
                dialogue: "A morte é apenas o começo...",
                type: "undead"
            },
            {
                id: 104,
                name: "BILL GATES",
                art: "imgs/bill.jpg",
                shield: "?",
                health: "?",
                maxHealth: "?",
                attackRange: ["?", "?"],
                ability: "CHAOS: Ataques causam dano aleatório entre 1 e 15",
                description: "Uma manifestação do caos e da destruição.",
                dialogue: "O abismo olha de volta para você!",
                type: "chaos"
            },
        ];

        // Variáveis do jogo melhoradas
        let selectedCards = [];
        let playerDeck = [];
        let playerHand = [];
        let currentBoss = null;
        let playerField = [];
        let enemyField = [];
        let isPlayerTurn = true;
        let battleRound = 1;
        let gameWins = 0;
        let gameLosses = 0;

        // Elementos DOM
        const selectionPhase = document.getElementById("selectionPhase");
        const battlePhase = document.getElementById("battlePhase");
        const cardPool = document.getElementById("cardPool");
        const startBattleBtn = document.getElementById("startBattleBtn");
        const shuffleDeckBtn = document.getElementById("shuffleDeckBtn");
        const playerSlots = document.getElementById("playerSlots");
        const enemySlot = document.getElementById("enemySlot");
        const battleLog = document.getElementById("battleLog");
        const turnIndicator = document.getElementById("turnIndicator");
        const attackBtn = document.getElementById("attackBtn");
        const endTurnBtn = document.getElementById("endTurnBtn");
        const drawCardBtn = document.getElementById("drawCardBtn");
        const playerHandArea = document.getElementById("playerHandArea");
        const playerHandCards = document.getElementById("playerHandCards");
        const resultOverlay = document.getElementById("resultOverlay");
        const resultTitle = document.getElementById("resultTitle");
        const resultMessage = document.getElementById("resultMessage");
        const resultButton = document.getElementById("resultButton");
        const selectedCount = document.getElementById("selectedCount");
        const storyContent = document.getElementById("storyContent");
        const enemyTitle = document.getElementById("enemyTitle");

        // Elementos de música
        const bgMusic = document.getElementById('bgMusic');
        const musicOverlay = document.getElementById('musicOverlay');
        const activateAudioBtn = document.getElementById('activateAudio');
        const playPauseBtn = document.getElementById('playPauseBtn');
        const muteBtn = document.getElementById('muteBtn');
        const volumeControl = document.getElementById('volumeControl');

        // Inicializar o jogo
        function initGame() {
            // Limpar conteúdo da história, mantendo apenas o inicial
            while (storyContent.childNodes.length > 3) {
                storyContent.removeChild(storyContent.lastChild);
            }
            
            // Criar pool de seleção de cartas (12 aleatórias do banco)
            const shuffledCards = [...cardsDatabase]
                .sort(() => Math.random() - 0.5)
                .slice(0, 12);

            cardPool.innerHTML = "";
            shuffledCards.forEach((card) => {
                const cardElement = createCardElement(card);
                cardElement.addEventListener("click", () =>
                    toggleCardSelection(card, cardElement)
                );
                cardPool.appendChild(cardElement);
            });

            selectedCards = [];
            updateStartButton();
            addStoryMessage("Selecione suas cartas para o próximo duelo.");
            
            // Atualizar contador de cartas selecionadas
            selectedCount.textContent = "0";
        }

        // Criar elemento de carta melhorado
        function createCardElement(card, isBoss = false) {
            const cardElement = document.createElement("div");
            cardElement.className = `card ${isBoss ? "card-boss" : ""}`;
            cardElement.dataset.id = card.id;

            const [minDmg, maxDmg] = Array.isArray(card.attackRange) ? card.attackRange : [3, 6];
            const healthValue = typeof card.health === 'number' ? card.health : 10;
            const maxHealthValue = typeof card.maxHealth === 'number' ? card.maxHealth : 10;
            const shieldValue = typeof card.shield === 'number' ? card.shield : 0;

            // Verifica se a propriedade 'art' termina com extensão de imagem
            const isImage = card.art && card.art.match(/\.(png|jpg|jpeg|gif)$/i);
            
            cardElement.innerHTML = `
                <div class="glow"></div>
                <div class="card-name">${card.name}</div>
                <div class="card-art">
                    ${isImage ? 
                        `<img src="${card.art}" alt="${card.name}" onerror="this.onerror=null; this.parentElement.innerHTML='<div style=\\'width:100%; height:100%; display:flex; justify-content:center; align-items:center; font-size:48px;\\'>${card.name.charAt(0)}</div>';">` : 
                        `<div style="width:100%; height:100%; display:flex; justify-content:center; align-items:center; font-size:48px;">${card.art || card.name.charAt(0)}</div>`}
                </div>
                <div class="card-stats">
                    <div class="stat shield-stat">
                        <div class="stat-value">${shieldValue}</div>
                        <div class="stat-name">ESCUDO</div>
                    </div>
                    <div class="stat health-stat">
                        <div class="stat-value">${healthValue}/${maxHealthValue}</div>
                        <div class="stat-name">VIDA</div>
                    </div>
                    <div class="stat attack-stat">
                        <div class="stat-value">${minDmg}-${maxDmg}</div>
                        <div class="stat-name">DANO</div>
                    </div>
                </div>
                <div class="card-ability" title="${card.ability}">${card.ability.split(":")[0]}</div>
            `

            // Adicionar tooltip para habilidade
            const abilityElement = cardElement.querySelector('.card-ability');
            abilityElement.addEventListener('mouseenter', (e) => {
                const tooltip = document.createElement('div');
                tooltip.className = 'tooltip';
                tooltip.textContent = card.ability;
                document.body.appendChild(tooltip);
                
                const rect = abilityElement.getBoundingClientRect();
                tooltip.style.left = `${rect.left + window.scrollX}px`;
                tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight - 10}px`;
                tooltip.style.opacity = '1';
                
                abilityElement.tooltip = tooltip;
            });
            
            abilityElement.addEventListener('mouseleave', () => {
                if (abilityElement.tooltip) {
                    abilityElement.tooltip.remove();
                    abilityElement.tooltip = null;
                }
            });

            return cardElement;
        }

        // Alternar seleção de carta melhorado
        function toggleCardSelection(card, cardElement) {
            const index = selectedCards.findIndex((c) => c.id === card.id);

            if (index === -1) {
                if (selectedCards.length < 5) {
                    selectedCards.push(card);
                    cardElement.classList.add("selected");
                    addStoryMessage(`${card.name} adicionado ao seu deck.`);
                    playDialogue(card.dialogue);
                } else {
                    addBattleLog("Você já selecionou o máximo de 5 cartas!");
                    return;
                }
            } else {
                const removedCard = selectedCards.splice(index, 1)[0];
                cardElement.classList.remove("selected");
                addStoryMessage(`${removedCard.name} removido do seu deck.`);
            }

            updateStartButton();
            selectedCount.textContent = selectedCards.length;
        }

        // Atualizar estado do botão de iniciar batalha
        function updateStartButton() {
            startBattleBtn.disabled = selectedCards.length === 0;
        }

        // Embaralhar cartas disponíveis
        function shuffleDeck() {
            if (selectedCards.length > 0) {
                if (!confirm("Isso irá resetar suas cartas selecionadas. Continuar?")) {
                    return;
                }
            }
            
            initGame();
            addBattleLog("Cartas embaralhadas!");
        }

        // Iniciar batalha melhorado
        function startBattle() {
            // Criar cópias profundas das cartas selecionadas
            playerDeck = JSON.parse(JSON.stringify(selectedCards));
            currentBoss = JSON.parse(
                JSON.stringify(
                    bossCards[Math.floor(Math.random() * bossCards.length)]
                )
            );

            // Resetar stats do boss se forem "?"
            if (currentBoss.shield === "?") {
                currentBoss.shield = Math.floor(Math.random() * 10) + 5;
                currentBoss.health = Math.floor(Math.random() * 20) + 15;
                currentBoss.maxHealth = currentBoss.health;
                currentBoss.attackRange = [
                    Math.floor(Math.random() * 5) + 5,
                    Math.floor(Math.random() * 5) + 10
                ];
            }

            // Preparar campo de batalha
            playerField = [];
            enemyField = [currentBoss];
            enemyTitle.textContent = currentBoss.name;

            // Distribuir 3 cartas iniciais para a mão do jogador
            playerHand = [];
            for (let i = 0; i < 3; i++) {
                drawCard();
            }

            // Atualizar interface
            selectionPhase.style.display = "none";
            battlePhase.style.display = "flex";
            playerHandArea.style.display = "block";

            // Mostrar cartas
            renderBattlefield();
            renderPlayerHand();

            // Iniciar turno do jogador
            isPlayerTurn = true;
            battleRound = 1;
            turnIndicator.textContent = "Seu Turno";
            attackBtn.disabled = true;
            drawCardBtn.disabled = playerDeck.length === 0;

            // Adicionar mensagens de história
            addStoryMessage(`O duelo começa contra ${currentBoss.name}!`);
            playDialogue(currentBoss.dialogue);
            addBattleLog(`Round ${battleRound}: Seu turno começa.`);
            addBattleLog("Coloque cartas da sua mão no campo para começar!");
        }

        // Comprar carta do deck
        function drawCard() {
            if (playerDeck.length > 0 && playerHand.length < 5) {
                const drawnCard = playerDeck.pop();
                playerHand.push(drawnCard);
                renderPlayerHand();
                addBattleLog(`Você comprou ${drawnCard.name} do seu deck.`);
                drawCardBtn.disabled = playerDeck.length === 0;
                return true;
            } else if (playerHand.length >= 5) {
                addBattleLog("Sua mão está cheia (máximo 5 cartas)!");
            } else {
                addBattleLog("Seu deck está vazio!");
            }
            return false;
        }

        // Renderizar mão do jogador melhorado
        function renderPlayerHand() {
            playerHandCards.innerHTML = "";

            if (playerHand.length === 0) {
                playerHandCards.innerHTML = '<div style="padding: 20px; color: #777;">Sua mão está vazia</div>';
                return;
            }

            playerHand.forEach((card, index) => {
                const cardElement = createCardElement(card);
                cardElement.style.transform = "translateY(0)";
                cardElement.style.cursor = "pointer";
                cardElement.addEventListener("click", () => summonCard(index));
                playerHandCards.appendChild(cardElement);
            });
        }

        // Invocar carta da mão para o campo melhorado
        function summonCard(handIndex) {
            if (playerField.length >= 5) {
                addBattleLog("Você já tem o máximo de 5 cartas no campo!");
                return;
            }

            const card = playerHand[handIndex];
            playerField.push(card);
            playerHand.splice(handIndex, 1);

            addBattleLog(`${card.name} foi colocada no campo!`);
            playDialogue(card.dialogue);

            renderBattlefield();
            renderPlayerHand();

            // Habilitar ataque se houver cartas no campo
            attackBtn.disabled = playerField.length === 0;
        }

        // Renderizar campo de batalha melhorado
        function renderBattlefield() {
            playerSlots.innerHTML = "";
            enemySlot.innerHTML = "";

            // Cartas do jogador no campo
            playerField.forEach((card, index) => {
                const cardElement = createCardElement(card);
                cardElement.addEventListener("click", () => selectPlayerCard(index));
                if (card.selected) {
                    cardElement.classList.add("selected");
                }
                
                // Mostrar dano acumulado se a carta estiver ferida
                if (card.health < card.maxHealth) {
                    const damageIndicator = document.createElement('div');
                    damageIndicator.style.position = 'absolute';
                    damageIndicator.style.top = '5px';
                    damageIndicator.style.right = '5px';
                    damageIndicator.style.backgroundColor = 'rgba(255, 0, 0, 0.7)';
                    damageIndicator.style.color = 'white';
                    damageIndicator.style.borderRadius = '50%';
                    damageIndicator.style.width = '20px';
                    damageIndicator.style.height = '20px';
                    damageIndicator.style.display = 'flex';
                    damageIndicator.style.alignItems = 'center';
                    damageIndicator.style.justifyContent = 'center';
                    damageIndicator.style.fontSize = '10px';
                    damageIndicator.textContent = card.maxHealth - card.health;
                    cardElement.appendChild(damageIndicator);
                }
                
                playerSlots.appendChild(cardElement);
            });

            // Slots vazios para o jogador
            for (let i = playerField.length; i < 5; i++) {
                const emptySlot = document.createElement("div");
                emptySlot.className = "card";
                emptySlot.innerHTML = '<div class="empty-slot">Slot Vazio</div>';
                playerSlots.appendChild(emptySlot);
            }

            // Carta do boss
            if (enemyField.length > 0) {
                const bossCard = createCardElement(enemyField[0], true);
                enemySlot.appendChild(bossCard);
            }
        }

        // Selecionar carta do jogador melhorado
        function selectPlayerCard(index) {
            // Desselecionar todas as cartas primeiro
            playerField.forEach(card => {
                card.selected = false;
            });
            
            // Selecionar a carta clicada
            playerField[index].selected = true;
            
            renderBattlefield();
            attackBtn.disabled = false;
            
            // Mostrar mensagem de carta selecionada
            addBattleLog(`${playerField[index].name} pronta para atacar!`);
        }

        // Realizar ataque melhorado
        function performAttack() {
            const attackingCardIndex = playerField.findIndex(
                (card) => card.selected
            );
            if (attackingCardIndex === -1) return;

            const attackingCard = playerField[attackingCardIndex];
            const defendingCard = enemyField[0];

            // 1. Calcular dano base
            const [minDmg, maxDmg] = Array.isArray(attackingCard.attackRange) ? 
                attackingCard.attackRange : [3, 6];
            let damage = Math.floor(Math.random() * (maxDmg - minDmg + 1)) + minDmg;

            // 2. Aplicar bônus de habilidades (ANTES de reduzir pelo escudo)
            if (attackingCard.ability.includes("Cura")) {
                // Encontra um aliado ferido para curar
                const woundedAllies = playerField.filter(c => c.health < c.maxHealth);
                if (woundedAllies.length > 0) {
                    const allyToHeal = woundedAllies[Math.floor(Math.random() * woundedAllies.length)];
                    const healAmount = 3;
                    allyToHeal.health = Math.min(allyToHeal.maxHealth, allyToHeal.health + healAmount);
                    
                    const allyCard = playerSlots.children[[...playerField].indexOf(allyToHeal)];
                    showDamageEffect(allyCard, -healAmount);
                    addBattleLog(`${attackingCard.name} curou ${allyToHeal.name} em ${healAmount} pontos de vida!`);
                }
            }

            if (attackingCard.ability.includes("Porrada") && 
                attackingCard.health === attackingCard.maxHealth) {
                damage += 2;
                addBattleLog(`${attackingCard.name} desfere uma Porrada poderosa! (+2 de dano)`);
            }

            if (attackingCard.ability.includes("Sabedoria") || 
                attackingCard.ability.includes("Precisão")) {
                const ignoreAmount = 2;
                addBattleLog(`${attackingCard.name} ignora ${ignoreAmount} de escudo com sua habilidade!`);
                // O dano já é calculado considerando o escudo reduzido
            }

            if (attackingCard.ability.includes("Crítico") && 
                Math.random() < 0.25) {
                damage = maxDmg;
                addBattleLog(`${attackingCard.name} acertou um Crítico! Dano máximo: ${damage}`);
            }

            if (attackingCard.ability.includes("Golpe Sagrado") && 
                Math.random() < 0.5) {
                damage += 3;
                addBattleLog(`${attackingCard.name} desfere um Golpe Sagrado! (+3 de dano)`);
            }

            if (attackingCard.ability.includes("Sorte")) {
                // Dano já é totalmente aleatório pelo attackRange [1,12]
                addBattleLog(`${attackingCard.name} confia na sorte! Dano: ${damage}`);
            }

            // 3. Registrar dano bruto antes da redução
            addBattleLog(
                `${attackingCard.name} ataca com ${damage} de dano bruto!`
            );

            // 4. Reduzir pelo escudo (mas garantir mínimo de 1)
            let shieldReduction = defendingCard.shield;
            
            // Aplicar habilidades que ignoram escudo
            if (attackingCard.ability.includes("Sabedoria") || 
                attackingCard.ability.includes("Precisão")) {
                shieldReduction = Math.max(0, shieldReduction - 2);
            }
            
            const damageAfterShield = Math.max(1, damage - shieldReduction);

            // 5. Aplicar dano real
            defendingCard.health -= damageAfterShield;

            // Feedback visual
            const bossCard = enemySlot.querySelector(".card");
            showDamageEffect(bossCard, damageAfterShield);

            // Mensagem detalhada
            addBattleLog(
                `Dano final: ${damage} - ${shieldReduction} (escudo) = ${damageAfterShield}`
            );

            // Verificar se o boss foi derrotado
            if (defendingCard.health <= 0) {
                defendingCard.health = 0;
                addBattleLog(`${defendingCard.name} foi derrotado! Vitória!`);
                playDialogue("NÃÃÃOOO! Isso não é possível...");
                
                // Mostrar tela de vitória
                showResult(true);
                gameWins++;
                
                return;
            }

            // Desmarcar carta e terminar turno
            playerField[attackingCardIndex].selected = false;
            renderBattlefield();
            
            // Pequeno delay antes de terminar o turno
            setTimeout(() => {
                endTurn();
            }, 1500);
        }

        // Terminar turno do jogador melhorado
        function endTurn() {
            isPlayerTurn = false;
            turnIndicator.textContent = "Turno do Inimigo";
            attackBtn.disabled = true;
            drawCardBtn.disabled = true;
            endTurnBtn.disabled = true;

            addBattleLog(`Turno do inimigo começando...`);

            // Ataque do inimigo (melhorado)
            setTimeout(() => {
                if (enemyField.length === 0 || playerField.length === 0) return;

                const attackingCard = enemyField[0];
                const defendingCardIndex = Math.floor(Math.random() * playerField.length);
                const defendingCard = playerField[defendingCardIndex];

                // Calcular dano baseado no range de ataque do boss
                let minDmg, maxDmg;
                if (Array.isArray(attackingCard.attackRange)) {
                    [minDmg, maxDmg] = attackingCard.attackRange;
                } else {
                    // Para o boss "?" que tem ataque aleatório
                    minDmg = 1;
                    maxDmg = 15;
                }
                
                let damage = Math.floor(Math.random() * (maxDmg - minDmg + 1)) + minDmg;

                // Aplicar habilidades especiais do boss
                if (attackingCard.ability.includes("Sucumba")) {
                    const healAmount = Math.floor(damage / 2);
                    attackingCard.health = Math.min(
                        attackingCard.maxHealth,
                        attackingCard.health + healAmount
                    );
                    addBattleLog(
                        `${attackingCard.name} drena ${healAmount} de vida do ataque!`
                    );
                    showDamageEffect(enemySlot.querySelector(".card"), -healAmount);
                }

                if (attackingCard.ability.includes("Sopro Ardente")) {
                    // Dano em área a todas as cartas do jogador
                    playerField.forEach(card => {
                        card.health -= 5;
                        const cardElement = playerSlots.children[[...playerField].indexOf(card)];
                        showDamageEffect(cardElement, 5);
                    });
                    
                    addBattleLog(
                        `${attackingCard.name} usa Sopro Ardente! 5 de dano a todas as cartas!`
                    );
                    
                    // Verificar cartas derrotadas
                    playerField = playerField.filter(card => card.health > 0);
                    
                    if (playerField.length === 0) {
                        handleDefeat(attackingCard);
                        return;
                    }
                    
                    // Continuar para o próximo turno
                    setTimeout(() => {
                        startPlayerTurn();
                    }, 1500);
                    return;
                }

                if (attackingCard.ability.includes("Necrose")) {
                    defendingCard.maxHealth -= 1;
                    addBattleLog(
                        `${attackingCard.name} reduz a saúde máxima de ${defendingCard.name} em 1!`
                    );
                }

                // Reduzir dano pelo escudo do defensor
                damage = Math.max(1, damage - defendingCard.shield);

                // Aplicar dano
                defendingCard.health -= damage;

                // Feedback visual
                const playerCard = playerSlots.children[defendingCardIndex];
                showDamageEffect(playerCard, damage);

                addBattleLog(
                    `${attackingCard.name} ataca (${minDmg}-${maxDmg}) causando ${damage} de dano a ${defendingCard.name}!`
                );

                // Verificar se a carta do jogador foi derrotada
                if (defendingCard.health <= 0) {
                    defendingCard.health = 0;
                    addBattleLog(`${defendingCard.name} foi derrotado!`);

                    // Remover carta do campo
                    playerField = playerField.filter((card) => card.health > 0);

                    // Verificar derrota
                    if (playerField.length === 0) {
                        handleDefeat(attackingCard);
                        return;
                    }
                }

                // Próximo turno do jogador
                setTimeout(() => {
                    startPlayerTurn();
                }, 1500);
            }, 1000);
        }

        // Lidar com derrota
        function handleDefeat(attackingCard) {
            addBattleLog("Todas suas cartas foram derrotadas! Derrota!");
            playDialogue("Patético! Sua resistência foi em vão!");
            gameLosses++;
            
            // Mostrar tela de derrota
            showResult(false);
        }

        // Mostrar tela de resultado (vitória/derrota) melhorado
        function showResult(victory) {
            if (victory) {
                resultTitle.textContent = "Vitória!";
                resultTitle.style.color = "#55ff55";
                resultMessage.textContent = `Você derrotou ${currentBoss.name} e salvou o reino de Eldrath!\n\nVitórias: ${gameWins}\nDerrotas: ${gameLosses}`;
            } else {
                resultTitle.textContent = "Derrota";
                resultTitle.style.color = "#ff5555";
                resultMessage.textContent = `Você foi derrotado por ${currentBoss.name}. As trevas consomem o reino...\n\nVitórias: ${gameWins}\nDerrotas: ${gameLosses}`;
            }
            
            resultOverlay.style.display = "flex";
        }

        // Iniciar turno do jogador melhorado
        function startPlayerTurn() {
            isPlayerTurn = true;
            battleRound++;
            turnIndicator.textContent = "Seu Turno";
            addBattleLog(`Round ${battleRound}: Seu turno começa.`);

            // Comprar uma carta no início do turno (se houver cartas no deck)
            if (playerDeck.length > 0 && playerHand.length < 5) {
                drawCard();
            }

            // Resetar status de ataque das cartas
            playerField.forEach((card) => {
                card.selected = false;
            });

            // Atualizar interface
            renderBattlefield();
            attackBtn.disabled = true;
            drawCardBtn.disabled = playerDeck.length === 0;
            endTurnBtn.disabled = false;
        }

        // Finalizar batalha melhorado
        function endBattle(victory) {
            if (victory) {
                addStoryMessage(
                    `Você derrotou ${currentBoss.name} e ganhou o duelo!`
                );
                addStoryMessage("O reino está seguro... por enquanto.");
            } else {
                addStoryMessage(`Você foi derrotado por ${currentBoss.name}.`);
                addStoryMessage("As trevas consomem o reino...");
            }

            // Voltar para seleção de cartas
            battlePhase.style.display = "none";
            selectionPhase.style.display = "flex";
            playerHandArea.style.display = "none";
            initGame();
        }

        // Mostrar efeito de dano melhorado
        function showDamageEffect(element, amount) {
            if (!element) return;
            
            const effect = document.createElement("div");
            effect.className = amount > 0 ? "damage-effect" : 
                              amount < 0 ? "heal-effect" : "shield-effect";
            effect.textContent = amount > 0 ? `-${amount}` : 
                                 amount < 0 ? `+${Math.abs(amount)}` : `0`;

            const rect = element.getBoundingClientRect();
            effect.style.left = `${rect.left + rect.width / 2 - 15}px`;
            effect.style.top = `${rect.top + rect.height / 2 - 30}px`;

            document.body.appendChild(effect);

            setTimeout(() => {
                effect.remove();
            }, 1000);
        }

        // Adicionar mensagem de história
        function addStoryMessage(message) {
            const p = document.createElement("p");
            p.textContent = message;
            storyContent.appendChild(p);
            storyContent.scrollTop = storyContent.scrollHeight;
        }

        // Adicionar mensagem de diálogo
        function playDialogue(dialogue) {
            const p = document.createElement("p");
            p.className = "dialogue";
            p.textContent = `"${dialogue}"`;
            storyContent.appendChild(p);
            storyContent.scrollTop = storyContent.scrollHeight;
        }

        // Adicionar mensagem de batalha
        function addBattleLog(message) {
            const entry = document.createElement("div");
            entry.className = "log-entry";
            entry.textContent = message;
            battleLog.appendChild(entry);
            battleLog.scrollTop = battleLog.scrollHeight;
        }
        
        // Configurações de música melhoradas
        function setupAudio() {
            // Carregar configurações salvas
            const savedVolume = localStorage.getItem('gameVolume');
            const savedMuted = localStorage.getItem('gameMuted') === 'true';
            
            // Aplicar configurações
            if (savedVolume !== null) {
                bgMusic.volume = parseFloat(savedVolume);
                volumeControl.value = savedVolume;
            } else {
                bgMusic.volume = 0.5;
            }
            
            if (savedMuted) {
                bgMusic.muted = true;
                muteBtn.textContent = '🔇';
            }
            
            // Tenta autoplay
            const playPromise = bgMusic.play();
            
            if (playPromise !== undefined) {
                playPromise.catch(error => {
                    console.log("Autoplay bloqueado:", error);
                    musicOverlay.style.display = 'flex';
                });
            }
            
            // Botão de ativação manual
            activateAudioBtn.addEventListener('click', () => {
                bgMusic.play()
                    .then(() => {
                        musicOverlay.style.display = 'none';
                        localStorage.setItem('audioInteraction', 'true');
                    })
                    .catch(e => console.log("Erro ao iniciar música:", e));
            });
            
            // Se o usuário já interagiu antes, tenta autoplay
            if (localStorage.getItem('audioInteraction') === 'true') {
                bgMusic.play().catch(e => console.log("Autoplay falhou:", e));
            }
            
            // Controles de música
            playPauseBtn.addEventListener('click', () => {
                if (bgMusic.paused) {
                    bgMusic.play();
                    playPauseBtn.textContent = '⏸';
                } else {
                    bgMusic.pause();
                    playPauseBtn.textContent = '⏵';
                }
            });
            
            muteBtn.addEventListener('click', () => {
                bgMusic.muted = !bgMusic.muted;
                muteBtn.textContent = bgMusic.muted ? '🔇' : '🔊';
                localStorage.setItem('gameMuted', bgMusic.muted);
            });
            
            volumeControl.addEventListener('input', () => {
                bgMusic.volume = volumeControl.value;
                localStorage.setItem('gameVolume', volumeControl.value);
            });
            
            // Atualizar estado dos controles
            bgMusic.addEventListener('play', () => {
                playPauseBtn.textContent = '⏸';
            });
            
            bgMusic.addEventListener('pause', () => {
                playPauseBtn.textContent = '⏵';
            });
            
            // Tenta autoplay quando o usuário interage com a página
            document.addEventListener('click', function firstInteraction() {
                if (bgMusic.paused) {
                    bgMusic.play().catch(e => console.log("Erro ao tocar música:", e));
                }
                document.removeEventListener('click', firstInteraction);
            }, { once: true });
        }

        // Event Listeners melhorados
        startBattleBtn.addEventListener("click", startBattle);
        shuffleDeckBtn.addEventListener("click", shuffleDeck);
        attackBtn.addEventListener("click", performAttack);
        endTurnBtn.addEventListener("click", endTurn);
        drawCardBtn.addEventListener("click", drawCard);
        resultButton.addEventListener("click", () => {
            resultOverlay.style.display = "none";
            endBattle(resultTitle.textContent === "Vitória!");
        });

        // Iniciar o jogo
        setupAudio();
        initGame();
    